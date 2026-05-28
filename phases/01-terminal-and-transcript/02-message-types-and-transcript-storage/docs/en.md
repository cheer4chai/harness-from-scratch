# Message Types and Transcript Storage

> Build the json transcript schema slice of the coding agent.

**Phase:** Terminal & Transcript
**Lesson:** 2
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs terminal interaction, message persistence, replay, streaming, and diagnostics. This lesson isolates **Message Types and Transcript Storage** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/01-terminal-and-transcript/02-message-types-and-transcript-storage/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Message Types and Transcript Storage and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
02-message-types-and-transcript-storage: JSON transcript schema
status: ready
```

## Ship It

The reusable artifact is [outputs/02-message-types-and-transcript-storage.md](../outputs/02-message-types-and-transcript-storage.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

