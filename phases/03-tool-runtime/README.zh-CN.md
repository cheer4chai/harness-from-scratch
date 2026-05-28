# Phase 3: 工具运行时

把模型的 tool request 转换为受控本地动作。

## Outcomes

- 定义包含 input schema 和 result shape 的类型化 tool interface。
- 按名称注册和发现 tools。
- 执行 shell、read、search tools，并返回结构化错误。
- 将 tool results 归一化为 LLM 可消费消息。
- 发出 progress 并支持 cancellation。

## Design Goal

Tools 把模型意图变成本地效果，因此 runtime 必须明确名称、输入、返回值、超时和失败。本阶段保持 registry 小而清晰，同时让每次 tool call 都可追踪。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/03-tool-runtime/code/demo.ts
```

该 demo 解析 JSON tool call，通过 registry dispatch，运行一个带 timeout 的 shell command，并返回归一化 result object。

## Acceptance Check

- demo 输出 `tool-runtime: ok=true`。
- shell tool 返回 `tool-runtime`。
- tool lookup 通过 registry 完成，而不是由调用方直接调用函数。

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Tool 接口与 JSON Schema 输入](01-tool-interface-and-json-schema-inputs/docs/zh-CN.md) | Tool interface |
| 02 | [Tool Registry 与发现](02-tool-registry-and-discovery/docs/zh-CN.md) | Registry trace |
| 03 | [带退出码和超时的 Shell Tool](03-shell-tool-with-exit-codes-and-timeouts/docs/zh-CN.md) | Shell tool |
| 04 | [文件读取与搜索工具](04-file-read-and-search-tools/docs/zh-CN.md) | Read/search tools |
| 05 | [Tool Result 归一化](05-tool-result-normalization/docs/zh-CN.md) | Result normalizer |
| 06 | [进度事件与取消](06-progress-events-and-cancellation/docs/zh-CN.md) | Progress event fixture |

