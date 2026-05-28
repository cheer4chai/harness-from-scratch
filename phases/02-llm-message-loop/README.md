# Phase 2: LLM Message Loop

Connect the transcript to an LLM provider through a narrow adapter.

## Outcomes

- Define a provider interface independent of any single API.
- Build system, user, and environment context messages.
- Stream assistant responses into the transcript.
- Detect tool-use blocks and continue the turn after tool results.
- Track turns, token estimates, and cost metadata.

## Design Goal

The LLM provider is an adapter, not the application core. This phase teaches a message loop that can be tested with a fake provider first, then swapped for a real API once the protocol is clear.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/02-llm-message-loop/code/demo.ts
```

The demo uses a fake provider to transform a user message into an assistant response that looks like a tool-use request. This keeps the lesson runnable without network access.

To run the same provider boundary against a live API, use the optional live demo:

```bash
LLM_API_KEY=... LLM_MODEL=... pnpm demo:llm
```

The live demo defaults to an OpenAI-compatible Chat Completions adapter. Set `LLM_API_STYLE=responses` to use the Responses adapter, and set `LLM_BASE_URL` when targeting a compatible gateway instead of `https://api.openai.com/v1`.

## Acceptance Check

- The demo prints `llm-loop: 3 messages`.
- The assistant output is a JSON tool request.
- The provider is replaceable through a narrow `complete(messages)` interface.
- `pnpm demo:llm` is optional and only runs when the required environment variables are provided.

## Live API Environment

| Variable | Required | Default | Purpose |
|---|---:|---|---|
| `LLM_API_KEY` | Yes | - | Bearer token for the provider. |
| `LLM_MODEL` | Yes | - | Model name sent to the provider. |
| `LLM_BASE_URL` | No | `https://api.openai.com/v1` | Provider base URL. |
| `LLM_API_STYLE` | No | `chat` | `chat` for `/chat/completions`, `responses` for `/responses`. |

Expected live trace:

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
| 01 | [Provider Adapter Interface](01-provider-adapter-interface/docs/en.md) | Provider contract |
| 02 | [System Prompt, User Context, and Environment Context](02-system-prompt-user-context-and-environment-context/docs/en.md) | Prompt assembly trace |
| 03 | [Assistant Streaming and Stop Conditions](03-assistant-streaming-and-stop-conditions/docs/en.md) | Streaming fixture |
| 04 | [Tool-Use Blocks in the Message Loop](04-tool-use-blocks-in-the-message-loop/docs/en.md) | Tool-call transcript |
| 05 | [Cost, Token, and Turn Accounting](05-cost-token-and-turn-accounting/docs/en.md) | Usage summary |
