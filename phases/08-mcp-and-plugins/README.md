# Phase 8: MCP & Plugins

Expose external tools and resources through protocol and plugin boundaries.

## Outcomes

- Wrap external tool calls behind an MCP-style adapter.
- Start and communicate with a local MCP server.
- List and read external resources.
- Package commands, skills, hooks, and MCP servers as a plugin.
- Refresh tools when external servers connect.

## Design Goal

External tools need a protocol boundary and a trust boundary. This phase starts with a tiny plugin manifest and MCP-like tool adapter before introducing real server processes.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/08-mcp-and-plugins/code/demo.ts
```

The demo loads a plugin manifest from JSON, exposes a `reverse` tool, calls it through the adapter, and prints the result.

## Acceptance Check

- The demo prints `mcp-plugins: reverse`.
- The tool output is `pcm`.
- Tools are discovered from manifest data rather than hardcoded by the caller.

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [MCP Tool Adapter Shape](01-mcp-tool-adapter-shape/docs/en.md) | MCP adapter |
| 02 | [Local MCP Server Process](02-local-mcp-server-process/docs/en.md) | Local server |
| 03 | [Resource Listing and Reading](03-resource-listing-and-reading/docs/en.md) | Resource tools |
| 04 | [Plugin Manifest and Trust Boundary](04-plugin-manifest-and-trust-boundary/docs/en.md) | Plugin manifest |
| 05 | [Dynamic Tool Refresh](05-dynamic-tool-refresh/docs/en.md) | Refresh trace |

