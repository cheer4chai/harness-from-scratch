# Pre-Tool and Post-Tool Hooks

> Build the hook runner slice of the coding agent.

**Phase:** Commands, Skills & Hooks
**Lesson:** 4
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs slash commands, markdown skills, conditional discovery, hooks, and command attachments. This lesson isolates **Pre-Tool and Post-Tool Hooks** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/07-commands-skills-and-hooks/04-pre-tool-and-post-tool-hooks/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Pre-Tool and Post-Tool Hooks and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
04-pre-tool-and-post-tool-hooks: Hook runner
status: ready
```

## Ship It

The reusable artifact is [outputs/04-pre-tool-and-post-tool-hooks.md](../outputs/04-pre-tool-and-post-tool-hooks.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

