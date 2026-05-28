# Runnable TypeScript Demo Skeleton for Every Lesson

> Learning a coding agent cannot stop at diagrams; every mechanism needs to run locally.

**Phase:** 0
**Lesson:** 3
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~75 minutes
**Prerequisites:** Phase 0 lesson 2

## Problem

A coding-agent implementation becomes complex quickly: CLI, message loop, tool registry, file editing, permissions, compaction, MCP, and subagents all connect to each other. Without a consistent demo shape, readers cannot tell what a lesson actually implemented or how later lessons combine.

This lesson defines the minimum runnable contract for every lesson. The connection to the agent is direct: every agent capability must first work as a small isolated demo before it joins the full runtime.

## Concept

Each lesson is a slice of the agent runtime and must include:

- `code/demo.ts`: the smallest TypeScript implementation of the mechanism.
- `docs/en.md` and `docs/zh-CN.md`: the explanation of where this mechanism sits in the agent loop.
- `outputs/`: a reusable artifact such as a schema, prompt, checklist, or manifest.
- verifiable output: the demo prints a stable trace on success and throws on failure.

For example, the Phase 3 shell tool should not only explain that tools matter. It should register a tool, execute a command, return a structured result, and fail when the output does not match.

## Build It

Run:

```bash
pnpm exec tsx phases/00-orientation-and-setup/03-project-skeleton-and-test-harness/code/demo.ts
```

The demo checks the expected directories and proves a lesson has code, documentation, and output boundaries.

## Trace It

Expected evidence:

```text
skeleton: code, docs, outputs
```

## Ship It

The reusable artifact is [outputs/skeleton-contract.md](../outputs/skeleton-contract.md).

## Exercises

1. Add a failing case for a missing `outputs` directory.
2. Run the same check against a temporary lesson directory and inspect the error.
3. Write down which artifacts a Phase 3 `Tool Runtime` lesson should contain.
