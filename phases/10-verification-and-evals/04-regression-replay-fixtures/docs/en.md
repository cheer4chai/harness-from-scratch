# Regression Replay Fixtures

> Build the replay fixture slice of the coding agent.

**Phase:** Verification & Evals
**Lesson:** 4
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs verification contracts, build-test-lint pipelines, functional probes, replay fixtures, and benchmarks. This lesson isolates **Regression Replay Fixtures** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/10-verification-and-evals/04-regression-replay-fixtures/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Regression Replay Fixtures and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
04-regression-replay-fixtures: Replay fixture
status: ready
```

## Ship It

The reusable artifact is [outputs/04-regression-replay-fixtures.md](../outputs/04-regression-replay-fixtures.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

