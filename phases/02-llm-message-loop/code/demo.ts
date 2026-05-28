import { FakeProvider, assertToolRequestShape, query } from "./providers.js";

const { messages } = await query(new FakeProvider(), "tool: echo");
const last = messages.at(-1);

if (last?.content !== '{"tool":"echo","input":"from provider"}') {
  throw new Error("provider did not return expected tool request");
}
assertToolRequestShape(last.content);

console.log("llm-loop: 3 messages");
console.log(last.content);
