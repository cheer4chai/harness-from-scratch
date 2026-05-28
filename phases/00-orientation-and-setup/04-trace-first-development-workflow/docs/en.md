# Use Traces to Prove Agent Behavior

> The main risk in a coding agent is not that it cannot talk; it is that it claims success without evidence.

**Phase:** 0
**Lesson:** 4
**Type:** Verify
**Tech Stack:** TypeScript, Node.js
**Time:** ~45 minutes
**Prerequisites:** Phase 0 lesson 3

## Problem

A coding agent plans, edits files, runs tools, and makes mistakes. If a demo only prints `success`, the learner cannot tell whether the agent really completed the development task.

This course requires trace-first development from Phase 0. Every agent capability must leave inspectable evidence:

- Phase 1 traces transcript messages.
- Phase 2 traces model requests and assistant responses.
- Phase 3 traces tool calls and tool results.
- Phase 4 traces diffs.
- Phase 5 traces permission decisions.
- Phase 10-11 trace verification reports.

## Concept

A useful trace includes:

- **command:** the command or tool that actually ran.
- **input:** the message, file, or context the agent used.
- **observed:** the output that actually appeared.
- **expected:** the expected result.
- **verdict:** PASS, FAIL, or PARTIAL.

This makes the course match real coding-agent work: not "I think the code should work", but "I ran this, observed that, and can or cannot continue."

## Build It

Run:

```bash
pnpm exec tsx phases/00-orientation-and-setup/04-trace-first-development-workflow/code/demo.ts
```

The demo builds a tiny verification report from a command result. Later phases extend the same pattern to build, test, lint, UI probes, and end-to-end repository tasks.

## Trace It

Expected evidence:

```text
trace-first: PASS
observed: 4
```

## Ship It

The reusable artifact is [outputs/verification-checklist.md](../outputs/verification-checklist.md).

## Exercises

1. Change the demo's `expected` value to the wrong output and confirm the verdict becomes `FAIL`.
2. Add an `input` field that records the user task.
3. Write the trace fields a Phase 4 file-editing demo should record.
