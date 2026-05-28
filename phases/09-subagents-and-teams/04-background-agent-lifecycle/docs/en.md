# Background Agent Lifecycle

> Build the lifecycle trace slice of the coding agent.

**Phase:** Subagents & Teams
**Lesson:** 4
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs agent definitions, forked context, restricted tools, background lifecycle, and coordination. This lesson isolates **Background Agent Lifecycle** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/09-subagents-and-teams/04-background-agent-lifecycle/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Background Agent Lifecycle and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
04-background-agent-lifecycle: Lifecycle trace
status: ready
```

## Ship It

The reusable artifact is [outputs/04-background-agent-lifecycle.md](../outputs/04-background-agent-lifecycle.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

