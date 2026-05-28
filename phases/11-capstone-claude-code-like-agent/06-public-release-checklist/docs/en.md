# Public Release Checklist

> Build the release checklist slice of the coding agent.

**Phase:** Capstone Claude-Code-Like Agent
**Lesson:** 6
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs repo inspection, plan-edit-verify loops, recovery, packaging, gap analysis, and release checks. This lesson isolates **Public Release Checklist** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/11-capstone-claude-code-like-agent/06-public-release-checklist/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Public Release Checklist and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
06-public-release-checklist: Release checklist
status: ready
```

## Ship It

The reusable artifact is [outputs/06-public-release-checklist.md](../outputs/06-public-release-checklist.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

