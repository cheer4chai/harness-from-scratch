# MCP Tool Adapter Shape

> Build the mcp adapter slice of the coding agent.

**Phase:** MCP & Plugins
**Lesson:** 1
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs MCP adapters, local server processes, resources, plugin manifests, and dynamic refresh. This lesson isolates **MCP Tool Adapter Shape** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

```bash
pnpm exec tsx phases/08-mcp-and-plugins/01-mcp-tool-adapter-shape/code/demo.ts
```

The demo is intentionally small. It implements a concrete trace for MCP Tool Adapter Shape and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

```text
01-mcp-tool-adapter-shape: MCP adapter
status: ready
```

## Ship It

The reusable artifact is [outputs/01-mcp-tool-adapter-shape.md](../outputs/01-mcp-tool-adapter-shape.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.

