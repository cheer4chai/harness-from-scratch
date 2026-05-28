# Multi-File Edit Workflow

> Build the multi-edit trace slice of the coding agent.

**Phase:** Workspace Editing
**Lesson:** 5
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs safe writes, patch edits, diffs, git awareness, multi-file changes, and recovery. This lesson isolates **Multi-File Edit Workflow** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/04-workspace-editing/05-multi-file-edit-workflow/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Multi-File Edit Workflow and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
05-multi-file-edit-workflow: Multi-edit trace
status: ready
```

## Ship It

The reusable artifact is [outputs/05-multi-file-edit-workflow.md](../outputs/05-multi-file-edit-workflow.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

