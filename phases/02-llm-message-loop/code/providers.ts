export type Role = "system" | "user" | "assistant";

export type Message = {
  role: Role;
  content: string;
};

export type ProviderUsage = {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
};

export type ProviderResult = {
  role: "assistant";
  content: string;
  raw?: unknown;
  usage?: ProviderUsage;
};

export type QueryResult = {
  messages: Message[];
  providerResult: ProviderResult;
};

export interface Provider {
  complete(messages: Message[]): Promise<ProviderResult>;
}

type FetchLike = (url: string, init: RequestInit) => Promise<Response>;

type LiveProviderOptions = {
  apiKey: string;
  baseUrl: string;
  model: string;
  fetch?: FetchLike;
};

type LiveProviderConfig = {
  apiKey: string;
  baseUrl: string;
  model: string;
  fetch: FetchLike;
};

export type LiveProviderStyle = "chat" | "responses";

export class FakeProvider implements Provider {
  async complete(messages: Message[]): Promise<ProviderResult> {
    const lastUser = [...messages].reverse().find((message) => message.role === "user");
    if (!lastUser) {
      throw new Error("missing user message");
    }
    if (lastUser.content.startsWith("tool:")) {
      const content = '{"tool":"echo","input":"from provider"}';
      return { role: "assistant", content, usage: estimateUsage(messages, content) };
    }
    const content = `answer: ${lastUser.content}`;
    return { role: "assistant", content, usage: estimateUsage(messages, content) };
  }
}

export class ChatCompletionsProvider implements Provider {
  private readonly config: LiveProviderConfig;

  constructor(options: LiveProviderOptions) {
    this.config = normalizeLiveOptions(options);
  }

  async complete(messages: Message[]): Promise<ProviderResult> {
    const raw = await postJson(this.config, "chat/completions", {
      model: this.config.model,
      messages,
      temperature: 0,
    });

    return {
      role: "assistant",
      content: readChatCompletionContent(raw),
      raw,
      usage: normalizeUsage(readOptionalObject(raw).usage),
    };
  }
}

export class ResponsesProvider implements Provider {
  private readonly config: LiveProviderConfig;

  constructor(options: LiveProviderOptions) {
    this.config = normalizeLiveOptions(options);
  }

  async complete(messages: Message[]): Promise<ProviderResult> {
    const raw = await postJson(this.config, "responses", {
      model: this.config.model,
      input: messages,
      temperature: 0,
    });

    return {
      role: "assistant",
      content: readResponsesContent(raw),
      raw,
      usage: normalizeUsage(readOptionalObject(raw).usage),
    };
  }
}

export function createLiveProviderFromEnv(env: Record<string, string | undefined>): Provider {
  const apiKey = requireEnv(env, "LLM_API_KEY");
  const model = requireEnv(env, "LLM_MODEL");
  const baseUrl = env.LLM_BASE_URL?.trim() || "https://api.openai.com/v1";
  const style = readProviderStyle(env.LLM_API_STYLE);
  const options = { apiKey, baseUrl, model };

  if (style === "responses") {
    return new ResponsesProvider(options);
  }
  return new ChatCompletionsProvider(options);
}

export function readProviderStyle(value: string | undefined): LiveProviderStyle {
  const style = value?.trim() || "chat";
  if (style === "chat" || style === "responses") {
    return style;
  }
  throw new Error(`LLM_API_STYLE must be "chat" or "responses", got "${style}"`);
}

export async function query(provider: Provider, userText: string): Promise<QueryResult> {
  const messages: Message[] = [
    { role: "system", content: "You are a small coding agent." },
    { role: "user", content: userText },
  ];
  const providerResult = await provider.complete(messages);
  messages.push({ role: providerResult.role, content: providerResult.content });
  return { messages, providerResult };
}

export function assertToolRequestShape(content: string): void {
  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error(`assistant content is not JSON: ${preview(content)}`);
  }

  const value = readOptionalObject(parsed);
  if (value.tool !== "echo" || typeof value.input !== "string") {
    throw new Error(`assistant JSON is not an echo tool request: ${preview(content)}`);
  }
}

export function formatUsage(usage: ProviderUsage | undefined): string {
  if (!usage) {
    return "usage: unavailable";
  }
  return [
    `input=${usage.inputTokens ?? "unknown"}`,
    `output=${usage.outputTokens ?? "unknown"}`,
    `total=${usage.totalTokens ?? "unknown"}`,
  ].join(" ");
}

export function preview(content: string, maxLength = 120): string {
  const compact = content.replace(/\s+/g, " ").trim();
  if (compact.length <= maxLength) {
    return compact;
  }
  return `${compact.slice(0, maxLength - 3)}...`;
}

function normalizeLiveOptions(options: LiveProviderOptions): LiveProviderConfig {
  if (!options.apiKey.trim()) {
    throw new Error("LLM_API_KEY is required");
  }
  if (!options.model.trim()) {
    throw new Error("LLM_MODEL is required");
  }
  return {
    apiKey: options.apiKey,
    baseUrl: trimTrailingSlash(options.baseUrl || "https://api.openai.com/v1"),
    model: options.model,
    fetch: options.fetch ?? fetch,
  };
}

function requireEnv(env: Record<string, string | undefined>, name: "LLM_API_KEY" | "LLM_MODEL"): string {
  const value = env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is required`);
  }
  return value;
}

async function postJson(config: LiveProviderConfig, path: string, body: unknown): Promise<unknown> {
  const response = await config.fetch(`${config.baseUrl}/${path}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const responseText = await response.text();
  if (!response.ok) {
    throw new Error(`LLM API request failed: ${response.status} ${response.statusText} ${preview(responseText)}`);
  }
  try {
    return JSON.parse(responseText);
  } catch {
    throw new Error(`LLM API returned non-JSON response: ${preview(responseText)}`);
  }
}

function readChatCompletionContent(raw: unknown): string {
  const root = expectObject(raw, "chat completions response");
  if (!Array.isArray(root.choices)) {
    throw new Error("chat completions response is missing choices");
  }
  const first = expectObject(root.choices[0], "chat completions choice");
  const message = expectObject(first.message, "chat completions message");
  if (typeof message.content !== "string" || !message.content.trim()) {
    throw new Error("chat completions response is missing assistant content");
  }
  return message.content;
}

function readResponsesContent(raw: unknown): string {
  const root = expectObject(raw, "responses API response");
  if (typeof root.output_text === "string" && root.output_text.trim()) {
    return root.output_text;
  }

  if (Array.isArray(root.output)) {
    const text = root.output
      .flatMap((item) => {
        const content = readOptionalObject(item).content;
        return Array.isArray(content) ? content : [];
      })
      .map((item) => readOptionalObject(item))
      .filter((item) => item.type === "output_text" && typeof item.text === "string")
      .map((item) => item.text)
      .join("");
    if (text.trim()) {
      return text;
    }
  }

  throw new Error("responses API response is missing assistant content");
}

function normalizeUsage(value: unknown): ProviderUsage | undefined {
  const usage = readOptionalObject(value);
  const inputTokens = readNumber(usage.prompt_tokens) ?? readNumber(usage.input_tokens);
  const outputTokens = readNumber(usage.completion_tokens) ?? readNumber(usage.output_tokens);
  const totalTokens = readNumber(usage.total_tokens);

  if (inputTokens === undefined && outputTokens === undefined && totalTokens === undefined) {
    return undefined;
  }
  return { inputTokens, outputTokens, totalTokens };
}

function estimateUsage(messages: Message[], content: string): ProviderUsage {
  const inputTokens = messages.reduce((sum, message) => sum + estimateTokens(message.content), 0);
  const outputTokens = estimateTokens(content);
  return {
    inputTokens,
    outputTokens,
    totalTokens: inputTokens + outputTokens,
  };
}

function estimateTokens(text: string): number {
  return Math.max(1, Math.ceil(text.length / 4));
}

function expectObject(value: unknown, label: string): Record<string, unknown> {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  throw new Error(`${label} is malformed`);
}

function readOptionalObject(value: unknown): Record<string, unknown> {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return {};
}

function readNumber(value: unknown): number | undefined {
  return typeof value === "number" ? value : undefined;
}

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}
