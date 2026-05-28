# Provider contract

**Phase:** LLM 消息循环
**Lesson:** Provider Adapter 接口

## Purpose

这个 artifact 记录本章 demo 应该产出的结果。

## Evidence Contract

- demo 必须能通过 `pnpm exec tsx phases/02-llm-message-loop/01-provider-adapter-interface/code/demo.ts` 运行。
- demo 必须输出 `01-provider-adapter-interface: Provider contract`。
- demo 必须以 `status: ready` 收尾。
- 可选 live provider demo 必须和 `pnpm demo` 分离，并在设置 `LLM_API_KEY` 和 `LLM_MODEL` 后通过 `pnpm demo:llm` 运行。
- live adapters 必须把 Chat Completions 和 Responses API payload 归一化成同一个 provider result 形状。
