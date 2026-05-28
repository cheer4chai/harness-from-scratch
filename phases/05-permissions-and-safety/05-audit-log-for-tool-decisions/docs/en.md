# Audit Log for Tool Decisions

> Build the decision log slice of the coding agent.

**Phase:** Permissions & Safety
**Lesson:** 5
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs permission modes, filesystem scope, command risk, approvals, and audit logs. This lesson isolates **Audit Log for Tool Decisions** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/05-permissions-and-safety/05-audit-log-for-tool-decisions/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Audit Log for Tool Decisions and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
05-audit-log-for-tool-decisions: Decision log
status: ready
```

## Ship It

The reusable artifact is [outputs/05-audit-log-for-tool-decisions.md](../outputs/05-audit-log-for-tool-decisions.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

