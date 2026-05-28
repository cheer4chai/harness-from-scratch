type Manifest = {
  name: string;
  tools: Array<{ name: string; description: string }>;
};

class McpTool {
  constructor(
    readonly name: string,
    readonly description: string,
  ) {}

  call(args: Record<string, string>): Record<string, string> {
    if (this.name === "reverse") {
      return { content: (args.text ?? "").split("").reverse().join("") };
    }
    throw new Error(`unknown tool: ${this.name}`);
  }
}

function loadPluginManifest(raw: string): McpTool[] {
  const manifest = JSON.parse(raw) as Manifest;
  return manifest.tools.map((tool) => new McpTool(tool.name, tool.description));
}

const manifest = '{"name":"demo-plugin","tools":[{"name":"reverse","description":"Reverse text"}]}';
const tools = Object.fromEntries(loadPluginManifest(manifest).map((tool) => [tool.name, tool]));
const result = tools.reverse?.call({ text: "mcp" });

if (result?.content !== "pcm") {
  throw new Error("mcp adapter failed");
}

console.log("mcp-plugins: reverse");
console.log(result.content);
