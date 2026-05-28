# The Minimal Coding-Agent Loop

> Start with what one agent turn actually does.

**Phase:** 0
**Lesson:** 1
**Type:** Learn
**Tech Stack:** TypeScript, Node.js
**Time:** ~45 minutes
**Prerequisites:** None

## Problem

If the course starts with "build 80% of Claude Code", the learner still does not know what to implement first. A coding agent is not just a chat box. It is a loop:

1. The user gives a development task.
2. The agent writes the turn into a transcript.
3. The agent sends the transcript and context to a model.
4. The model returns natural language or a tool call.
5. The runtime executes the tool and writes the observation back to the transcript.
6. The agent continues until it can verify the task is complete.

This lesson turns that loop into observable data. Every later phase expands one part of it.

## Concept

The first version does not need a real LLM or real repository edits. It does need these concepts:

- **Task:** the development goal from the user.
- **Transcript:** the agent's working memory: user, assistant, and tool-result messages.
- **Model turn:** the step that asks the model what to do next.
- **Tool action:** shell, read file, edit file, search, or another real action.
- **Observation:** the tool result written back to the transcript.
- **Verification:** command output, diff, or trace evidence that proves the task is done.

The mapping is direct: Phase 1 builds transcripts, Phase 2 builds model turns, Phase 3-5 build tools and permissions, and Phase 10-11 build verification plus the end-to-end loop.

## Build It

Run the lesson demo:

```bash
pnpm exec tsx phases/00-orientation-and-setup/01-what-we-are-building/code/demo.ts
```

The demo prints the six steps in the agent loop and the later phase that implements each step.

## Trace It

Expected evidence:

```text
agent-loop-checklist: 6 steps
tool action -> shell/read/edit tools
```

## Ship It

The reusable artifact is [outputs/capability-checklist.md](../outputs/capability-checklist.md).

## Exercises

1. Add an `ask permission` step to the demo and map it to Phase 5.
2. Split `tool action` into `read file` and `edit file`, then inspect how the checklist changes.
3. Take a real task, such as "add tests to this project", and map it to the six loop steps.
