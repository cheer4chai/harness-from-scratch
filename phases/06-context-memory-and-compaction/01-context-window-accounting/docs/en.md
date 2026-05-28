# Context Window Accounting

> Build the token budget report slice of the coding agent.

**Phase:** Context, Memory & Compaction
**Lesson:** 1
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs context budgeting, attachments, memory files, manual compaction, auto compaction, and resume traces. This lesson isolates **Context Window Accounting** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/06-context-memory-and-compaction/01-context-window-accounting/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Context Window Accounting and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
01-context-window-accounting: Token budget report
status: ready
```

## Ship It

The reusable artifact is [outputs/01-context-window-accounting.md](../outputs/01-context-window-accounting.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

