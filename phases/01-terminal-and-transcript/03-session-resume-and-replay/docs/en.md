# Session Resume and Replay

> Build the replay command slice of the coding agent.

**Phase:** Terminal & Transcript
**Lesson:** 3
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs terminal interaction, message persistence, replay, streaming, and diagnostics. This lesson isolates **Session Resume and Replay** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/01-terminal-and-transcript/03-session-resume-and-replay/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for Session Resume and Replay and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
03-session-resume-and-replay: Replay command
status: ready
```

## Ship It

The reusable artifact is [outputs/03-session-resume-and-replay.md](../outputs/03-session-resume-and-replay.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

