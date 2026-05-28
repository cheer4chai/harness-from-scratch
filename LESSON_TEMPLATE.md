# Lesson Template

Use this template for every lesson folder.

## Folder Structure

```text
NN-lesson-name/
+-- code/
|   +-- README.md
|   +-- ...
+-- docs/
|   +-- en.md
+-- outputs/
    +-- ...
```

## Documentation Format

```markdown
# Lesson Title

> One sentence that captures the capability being built.

**Phase:** N
**Lesson:** N
**Type:** Build | Learn | Verify
**Tech Stack:** TypeScript, Node.js
**Time:** ~N minutes
**Prerequisites:** Phase N lesson N

## Problem

Describe the concrete coding-agent failure this lesson fixes. Keep it tied to an observable workflow.

## Concept

Explain the smallest model needed to understand the behavior. Prefer diagrams, message traces, file trees, and short examples over broad theory.

## Build It

Implement the smallest working TypeScript version. Code should be runnable locally and should produce an inspectable trace.

## Trace It

Show the exact command to run and the expected evidence. A passing lesson needs output, not just code.

## Harden It

Add only the failure handling required by this lesson. Name the failure, then show the check.

## Ship It

Save one reusable artifact in `outputs/`: prompt, skill, agent definition, MCP server, benchmark fixture, or verification checklist.

## Reference Anchors

- `src/example-module.ts` - what Claude Code design idea this lesson mirrors

## Exercises

1. Basic extension.
2. Failure-path probe.
3. Integration with an earlier lesson.
```

## Output Formats

### Prompt

```markdown
---
name: prompt-name
description: What this prompt helps with
phase: N
lesson: N
---

Prompt body.
```

### Skill

```markdown
---
name: skill-name
description: When to use this skill
phase: N
lesson: N
---

Skill instructions.
```

### Agent

```markdown
---
name: agent-name
description: When this agent should be spawned
allowed_tools:
  - shell
  - read_file
---

Agent system instructions.
```

### Verification Fixture

```json
{
  "name": "fixture-name",
  "task": "User-facing task description",
  "success_criteria": [
    "Observable criterion"
  ],
  "commands": [
    "command to run"
  ]
}
```
