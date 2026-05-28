# Phase 2: LLM 消息循环

通过窄 adapter 将 transcript 连接到 LLM provider。

## Outcomes

- 定义不绑定单一 API 的 provider interface。
- 构建 system、user 和 environment context messages。
- 将 assistant responses 流式写入 transcript。
- 识别 tool-use blocks，并在 tool results 后继续 turn。
- 统计 turns、token 估算和 cost metadata。

## Design Goal

LLM provider 是 adapter，不是应用核心。本阶段先用 fake provider 测试消息循环，再在协议清晰后替换为真实 API。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/02-llm-message-loop/code/demo.ts
```

该 demo 使用 fake provider，把 user message 转换成一个看起来像 tool-use request 的 assistant response，因此无需网络也能运行。

如果要用真实 API 跑同一条 provider 边界，可以使用可选 live demo：

```bash
LLM_API_KEY=... LLM_MODEL=... pnpm demo:llm
```

live demo 默认使用 OpenAI-compatible Chat Completions adapter。设置 `LLM_API_STYLE=responses` 可以切到 Responses adapter；如果目标是兼容网关而不是 `https://api.openai.com/v1`，设置 `LLM_BASE_URL`。

## Acceptance Check

- demo 输出 `llm-loop: 3 messages`。
- assistant 输出是 JSON tool request。
- provider 通过窄的 `complete(messages)` interface 可替换。
- `pnpm demo:llm` 是可选检查，只有提供必需环境变量时才运行真实 API。

## Live API 环境变量

| Variable | Required | Default | Purpose |
|---|---:|---|---|
| `LLM_API_KEY` | Yes | - | provider 的 Bearer token。 |
| `LLM_MODEL` | Yes | - | 发送给 provider 的模型名。 |
| `LLM_BASE_URL` | No | `https://api.openai.com/v1` | provider base URL。 |
| `LLM_API_STYLE` | No | `chat` | `chat` 调 `/chat/completions`，`responses` 调 `/responses`。 |

预期 live trace：

```text
llm-loop-live: 3 messages
provider: chat
model: <your model>
assistant: {"tool":"echo","input":"from provider"}
usage: input=... output=... total=...
transcript messages: 3
```

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Provider Adapter 接口](01-provider-adapter-interface/docs/zh-CN.md) | Provider contract |
| 02 | [System Prompt、用户上下文与环境上下文](02-system-prompt-user-context-and-environment-context/docs/zh-CN.md) | Prompt assembly trace |
| 03 | [Assistant 流式输出与停止条件](03-assistant-streaming-and-stop-conditions/docs/zh-CN.md) | Streaming fixture |
| 04 | [消息循环中的 Tool-Use Block](04-tool-use-blocks-in-the-message-loop/docs/zh-CN.md) | Tool-call transcript |
| 05 | [成本、Token 与轮次统计](05-cost-token-and-turn-accounting/docs/zh-CN.md) | Usage summary |
