# Map Claude Code Capabilities to Course Modules

> The purpose of reading Claude Code is to break mature product behavior into agent modules we can implement step by step.

**Phase:** 0
**Lesson:** 2
**Type:** Learn
**Tech Stack:** TypeScript, Node.js
**Time:** ~75 minutes
**Prerequisites:** Phase 0 lesson 1

## Problem

If we only read Claude Code source or feature lists, we get disconnected terms: tools, permissions, hooks, MCP, subagents, compaction. To learn how to implement a coding agent, each capability needs to be placed back into the agent loop:

- Which user workflow does this capability support?
- What input does it receive and what output does it produce?
- Which course phase should implement it?
- What minimal demo proves it works?

This lesson does not copy Claude Code's file structure. It builds a map from product capability to course module to runnable demo.

## Concept

When Claude Code is used as a target-behavior reference, split the runtime like this:

- **Conversation runtime:** terminal input, transcript, resume, streaming.
- **Model runtime:** prompt assembly, provider adapter, tool-use blocks.
- **Tool runtime:** tool schema, registry, execution, result normalization.
- **Workspace runtime:** read, search, edit, diff, git status.
- **Safety runtime:** permission modes, path boundaries, risky command approval.
- **Extension runtime:** commands, skills, hooks, MCP, plugins.
- **Agent runtime:** subagents, isolated context, verification, recovery.

Each later phase implements one of these areas, and Phase 11 combines them into a Claude-Code-like agent.

## Build It

Run:

```bash
pnpm exec tsx phases/00-orientation-and-setup/02-claude-code-capability-map/code/demo.ts
```

The demo prints a compact map from course modules to reference anchors.

## Trace It

Expected evidence:

```text
capability-map: 6 modules
tool runtime -> Phase 3, Phase 4, Phase 5
```

## Ship It

The reusable artifact is [outputs/architecture-reading-notes.md](../outputs/architecture-reading-notes.md).

## Exercises

1. Pick a Claude Code capability such as `/compact` and decide which runtime boundary owns it.
2. Add one evidence line for permissions, such as `deny outside workspace`.
3. Rename one capability in the map using your own wording while keeping the phase mapping intact.
