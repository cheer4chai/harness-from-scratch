# Phase 8: MCP 与插件

通过协议和插件边界暴露外部工具与资源。

## Outcomes

- 用 MCP-style adapter 包装外部 tool calls。
- 启动并连接本地 MCP server。
- 列出和读取外部 resources。
- 将 commands、skills、hooks 和 MCP servers 打包为 plugin。
- 当外部 servers 连接时刷新 tools。

## Design Goal

外部工具需要协议边界和信任边界。本阶段先用一个很小的 plugin manifest 和 MCP-like tool adapter 入手，再引入真实 server process。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/08-mcp-and-plugins/code/demo.ts
```

该 demo 从 JSON 加载 plugin manifest，暴露 `reverse` tool，通过 adapter 调用它并打印结果。

## Acceptance Check

- demo 输出 `mcp-plugins: reverse`。
- tool output 是 `pcm`。
- tools 从 manifest data 发现，而不是由调用方硬编码。

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [MCP Tool Adapter 形状](01-mcp-tool-adapter-shape/docs/zh-CN.md) | MCP adapter |
| 02 | [本地 MCP Server 进程](02-local-mcp-server-process/docs/zh-CN.md) | Local server |
| 03 | [Resource 列表与读取](03-resource-listing-and-reading/docs/zh-CN.md) | Resource tools |
| 04 | [Plugin Manifest 与信任边界](04-plugin-manifest-and-trust-boundary/docs/zh-CN.md) | Plugin manifest |
| 05 | [动态 Tool 刷新](05-dynamic-tool-refresh/docs/zh-CN.md) | Refresh trace |

