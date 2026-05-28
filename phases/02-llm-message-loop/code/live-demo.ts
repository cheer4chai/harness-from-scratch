import {
  assertToolRequestShape,
  createLiveProviderFromEnv,
  formatUsage,
  preview,
  query,
  readProviderStyle,
} from "./providers.js";

try {
  const style = readProviderStyle(process.env.LLM_API_STYLE);
  const model = process.env.LLM_MODEL?.trim() || "";
  const provider = createLiveProviderFromEnv(process.env);

  const prompt = [
    "tool: echo",
    "Return only compact JSON in this exact shape:",
    '{"tool":"echo","input":"from provider"}',
  ].join("\n");

  const { messages, providerResult } = await query(provider, prompt);
  assertToolRequestShape(providerResult.content);

  console.log("llm-loop-live: 3 messages");
  console.log(`provider: ${style}`);
  console.log(`model: ${model}`);
  console.log(`assistant: ${preview(providerResult.content)}`);
  console.log(formatUsage(providerResult.usage));
  console.log(`transcript messages: ${messages.length}`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`llm-loop-live failed: ${message}`);
  process.exit(1);
}
