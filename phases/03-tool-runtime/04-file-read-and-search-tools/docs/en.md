# File Read and Search Tools

> Build the read/search tools slice of the coding agent.

**Phase:** Tool Runtime
**Lesson:** 4
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs tool interfaces, registries, shell execution, file tools, result normalization, and progress. This lesson isolates **File Read and Search Tools** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/03-tool-runtime/04-file-read-and-search-tools/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for File Read and Search Tools and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
04-file-read-and-search-tools: Read/search tools
status: ready
```

## Ship It

The reusable artifact is [outputs/04-file-read-and-search-tools.md](../outputs/04-file-read-and-search-tools.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

