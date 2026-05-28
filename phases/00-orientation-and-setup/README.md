# Phase 0: Minimal Coding Agent Skeleton

Turn "build a coding agent" into the smallest useful loop: receive a user task, persist conversation state, decide whether a tool is needed, execute an action, observe the result, and continue the next turn.

## Outcomes

- Explain the core coding-agent loop: `user input -> transcript -> model turn -> tool action -> observation -> next turn`.
- Break Claude Code-inspired capabilities into modules that later phases implement.
- Create a TypeScript demo structure that every lesson can run.
- Establish the verification habit: before an agent claims success, it must leave command output, file diff, or trace evidence.

## Design Goal

Phase 0 is not generic project setup. It defines the shared vocabulary for the agent implementation. After this phase, the learner should know which part of the agent loop each later phase implements: Phase 1 handles transcripts, Phase 2 handles model turns, Phase 3-5 handle tools and permissions, and Phase 6-11 handle long context, extensions, subagents, and end-to-end verification.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/00-orientation-and-setup/code/demo.ts
```

The demo models a minimal agent loop and prints which later phase implements each step. It does not call a real LLM or edit a real repository; its purpose is to turn the course target into codable, verifiable modules.

## Acceptance Check

- The demo prints `agent-loop: 6 steps`.
- Each step maps to a later phase.
- The output includes an implementation path such as `tool action -> Phase 3/4/5`.
- No external dependencies or API keys are required.

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [The Minimal Coding-Agent Loop](01-what-we-are-building/docs/en.md) | Agent loop checklist |
| 02 | [Map Claude Code Capabilities to Course Modules](02-claude-code-capability-map/docs/en.md) | Capability-to-phase map |
| 03 | [Runnable TypeScript Demo Skeleton for Every Lesson](03-project-skeleton-and-test-harness/docs/en.md) | Runnable lesson contract |
| 04 | [Use Traces to Prove Agent Behavior](04-trace-first-development-workflow/docs/en.md) | Agent verification checklist |
