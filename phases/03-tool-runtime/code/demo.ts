import { execFileSync } from "node:child_process";

type ToolResult = {
  ok: boolean;
  content: string;
};

type Tool = (input: Record<string, string>) => ToolResult;

const tools: Record<string, Tool> = {
  echo: (input) => ({ ok: true, content: input.text ?? "" }),
  shell: (input) => {
    const content = execFileSync("sh", ["-c", input.command ?? ""], {
      encoding: "utf8",
      timeout: 2000,
    }).trim();
    return { ok: true, content };
  },
};

function runToolCall(raw: string): ToolResult {
  const call = JSON.parse(raw) as { tool: string; input: Record<string, string> };
  const tool = tools[call.tool];
  if (!tool) {
    throw new Error(`unknown tool: ${call.tool}`);
  }
  return tool(call.input);
}

const result = runToolCall('{"tool":"shell","input":{"command":"printf tool-runtime"}}');

if (!result.ok || result.content !== "tool-runtime") {
  throw new Error("tool call failed");
}

console.log(`tool-runtime: ok=${result.ok}`);
console.log(result.content);
