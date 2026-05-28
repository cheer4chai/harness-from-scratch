# Provider Adapter Interface

> Build the provider contract slice of the coding agent.

**Phase:** LLM Message Loop
**Lesson:** 1
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs provider adapters, prompt assembly, streaming, tool-use blocks, and usage accounting. This lesson isolates **Provider Adapter Interface** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/02-llm-message-loop/01-provider-adapter-interface/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Provider Adapter Interface and fails if the expected artifact cannot be produced.

The phase-level provider module also includes optional live adapters. They are not part of the default course run:

```bash
LLM_API_KEY=... LLM_MODEL=... LLM_API_STYLE=chat pnpm demo:llm
LLM_API_KEY=... LLM_MODEL=... LLM_API_STYLE=responses pnpm demo:llm
```

## Trace It

Expected evidence:

```text
01-provider-adapter-interface: Provider contract
status: ready
```

The live trace prints `llm-loop-live: 3 messages`, the selected provider style, the model name, an assistant preview, and usage metadata when the provider returns it.

## Ship It

The reusable artifact is [outputs/01-provider-adapter-interface.md](../outputs/01-provider-adapter-interface.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.
