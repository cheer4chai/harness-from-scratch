# Build-Test-Lint Verification Pipeline

> Build the verification runner slice of the coding agent.

**Phase:** Verification & Evals
**Lesson:** 2
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs verification contracts, build-test-lint pipelines, functional probes, replay fixtures, and benchmarks. This lesson isolates **Build-Test-Lint Verification Pipeline** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/10-verification-and-evals/02-build-test-lint-verification-pipeline/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Build-Test-Lint Verification Pipeline and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
02-build-test-lint-verification-pipeline: Verification runner
status: ready
```

## Ship It

The reusable artifact is [outputs/02-build-test-lint-verification-pipeline.md](../outputs/02-build-test-lint-verification-pipeline.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

