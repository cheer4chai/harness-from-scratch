import assert from "node:assert/strict";
import test from "node:test";

import {
  ChatCompletionsProvider,
  FakeProvider,
  ResponsesProvider,
  createLiveProviderFromEnv,
  query,
} from "./providers.js";

const messages = [
  { role: "system" as const, content: "You are a small coding agent." },
  { role: "user" as const, content: "tool: echo" },
];

test("fake provider keeps the offline tool request deterministic", async () => {
  const result = await query(new FakeProvider(), "tool: echo");

  assert.equal(result.messages.length, 3);
  assert.equal(result.messages.at(-1)?.content, '{"tool":"echo","input":"from provider"}');
  assert.equal(result.providerResult.content, '{"tool":"echo","input":"from provider"}');
});

test("chat completions provider normalizes assistant content and usage", async () => {
  const provider = new ChatCompletionsProvider({
    apiKey: "test-key",
    baseUrl: "https://example.test/v1",
    model: "test-model",
    fetch: async (url, init) => {
      assert.equal(url, "https://example.test/v1/chat/completions");
      assert.equal(init?.method, "POST");
      assert.equal(readHeader(init?.headers, "Authorization"), "Bearer test-key");
      assert.deepEqual(JSON.parse(String(init?.body)).messages, messages);

      return jsonResponse({
        choices: [{ message: { content: '{"tool":"echo","input":"live"}' } }],
        usage: { prompt_tokens: 12, completion_tokens: 4, total_tokens: 16 },
      });
    },
  });

  const result = await provider.complete(messages);

  assert.equal(result.content, '{"tool":"echo","input":"live"}');
  assert.deepEqual(result.usage, { inputTokens: 12, outputTokens: 4, totalTokens: 16 });
});

test("responses provider normalizes output_text and usage", async () => {
  const provider = new ResponsesProvider({
    apiKey: "test-key",
    baseUrl: "https://example.test/v1/",
    model: "test-model",
    fetch: async (url, init) => {
      assert.equal(url, "https://example.test/v1/responses");
      assert.equal(init?.method, "POST");
      assert.deepEqual(JSON.parse(String(init?.body)).input, messages);

      return jsonResponse({
        output_text: '{"tool":"echo","input":"live"}',
        usage: { input_tokens: 7, output_tokens: 3, total_tokens: 10 },
      });
    },
  });

  const result = await provider.complete(messages);

  assert.equal(result.content, '{"tool":"echo","input":"live"}');
  assert.deepEqual(result.usage, { inputTokens: 7, outputTokens: 3, totalTokens: 10 });
});

test("live provider creation requires API key and model", () => {
  assert.throws(
    () => createLiveProviderFromEnv({ LLM_API_STYLE: "chat", LLM_MODEL: "test-model" }),
    /LLM_API_KEY is required/,
  );
  assert.throws(
    () => createLiveProviderFromEnv({ LLM_API_STYLE: "chat", LLM_API_KEY: "test-key" }),
    /LLM_MODEL is required/,
  );
});

function jsonResponse(body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

function readHeader(headers: HeadersInit | undefined, name: string): string | undefined {
  if (!headers) {
    return undefined;
  }
  return new Headers(headers).get(name) ?? undefined;
}
