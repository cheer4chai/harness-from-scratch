# Restricted Tool Sets

> Build the tool allowlist slice of the coding agent.

**Phase:** Subagents & Teams
**Lesson:** 3
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs agent definitions, forked context, restricted tools, background lifecycle, and coordination. This lesson isolates **Restricted Tool Sets** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/09-subagents-and-teams/03-restricted-tool-sets/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Restricted Tool Sets and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
03-restricted-tool-sets: Tool allowlist
status: ready
```

## Ship It

The reusable artifact is [outputs/03-restricted-tool-sets.md](../outputs/03-restricted-tool-sets.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

