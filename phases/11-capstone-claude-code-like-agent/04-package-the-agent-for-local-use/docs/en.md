# Package the Agent for Local Use

> Build the installable package slice of the coding agent.

**Phase:** Capstone Claude-Code-Like Agent
**Lesson:** 4
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs repo inspection, plan-edit-verify loops, recovery, packaging, gap analysis, and release checks. This lesson isolates **Package the Agent for Local Use** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/11-capstone-claude-code-like-agent/04-package-the-agent-for-local-use/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Package the Agent for Local Use and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
04-package-the-agent-for-local-use: Installable package
status: ready
```

## Ship It

The reusable artifact is [outputs/04-package-the-agent-for-local-use.md](../outputs/04-package-the-agent-for-local-use.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

