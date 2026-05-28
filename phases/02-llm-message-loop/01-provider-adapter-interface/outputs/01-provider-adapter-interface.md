# Provider contract

**Phase:** LLM Message Loop
**Lesson:** Provider Adapter Interface

## Purpose

This artifact captures the output expected from the lesson demo.

## Evidence Contract

- The demo must run with `pnpm exec tsx phases/02-llm-message-loop/01-provider-adapter-interface/code/demo.ts`.
- The demo must print `01-provider-adapter-interface: Provider contract`.
- The demo must end with `status: ready`.
- The optional live provider demo must remain separate from `pnpm demo` and run through `pnpm demo:llm` when `LLM_API_KEY` and `LLM_MODEL` are set.
- Live adapters must normalize Chat Completions and Responses API payloads into the same provider result shape.
