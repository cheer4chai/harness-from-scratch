# Phase 7: Commands, Skills & Hooks

Make the agent extensible without hardcoding every workflow into the core loop.

## Outcomes

- Register slash commands.
- Load markdown skills from disk.
- Discover conditional skills when a task needs them.
- Run pre-tool and post-tool hooks.
- Convert command output into attachments.

## Design Goal

Extensibility should be layered on top of the loop without changing the loop for every new workflow. This phase separates command dispatch from hook execution so both can evolve independently.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/07-commands-skills-and-hooks/code/demo.ts
```

The demo registers a `/status` command and an audit hook. Running the command records the hook event before the command computes its output.

## Acceptance Check

- The demo prints `commands-skills-hooks: invoked`.
- The status output reports one recorded event.
- Hook behavior is separate from command behavior.

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Slash Command Registry](01-slash-command-registry/docs/en.md) | Command registry |
| 02 | [Markdown Skill Loader](02-markdown-skill-loader/docs/en.md) | Skill parser |
| 03 | [Conditional Skill Discovery](03-conditional-skill-discovery/docs/en.md) | Discovery fixture |
| 04 | [Pre-Tool and Post-Tool Hooks](04-pre-tool-and-post-tool-hooks/docs/en.md) | Hook runner |
| 05 | [Command Output as Attachments](05-command-output-as-attachments/docs/en.md) | Attachment command |

