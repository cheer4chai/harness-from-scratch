# System Prompt, User Context, and Environment Context

> Build the prompt assembly trace slice of the coding agent.

**Phase:** LLM Message Loop
**Lesson:** 2
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs provider adapters, prompt assembly, streaming, tool-use blocks, and usage accounting. This lesson isolates **System Prompt, User Context, and Environment Context** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/02-llm-message-loop/02-system-prompt-user-context-and-environment-context/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for System Prompt, User Context, and Environment Context and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
02-system-prompt-user-context-and-environment-context: Prompt assembly trace
status: ready
```

## Ship It

The reusable artifact is [outputs/02-system-prompt-user-context-and-environment-context.md](../outputs/02-system-prompt-user-context-and-environment-context.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

