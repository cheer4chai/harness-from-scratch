# Phase 9: Subagents & Teams

Run constrained child agents for focused work.

## Outcomes

- Define agents with instructions and allowed tools.
- Fork context into an isolated child transcript.
- Restrict tools by agent role.
- Run background agents and collect their output.
- Trace coordination between parent and child agents.

## Design Goal

Subagents are useful only when their scope is constrained. This phase models role-specific agents with different allowed tools and shows how a parent can collect their results.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/09-subagents-and-teams/code/demo.ts
```

The demo spawns a reviewer and an implementer. The reviewer has read/search tools, while the implementer can also write.

## Acceptance Check

- The demo prints `subagents: 2 results`.
- The reviewer and implementer produce separate outputs.
- Tool permissions are attached to agent roles.

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Agent Definition File](01-agent-definition-file/docs/en.md) | Agent manifest |
| 02 | [Forked Context and Isolated Transcript](02-forked-context-and-isolated-transcript/docs/en.md) | Child transcript |
| 03 | [Restricted Tool Sets](03-restricted-tool-sets/docs/en.md) | Tool allowlist |
| 04 | [Background Agent Lifecycle](04-background-agent-lifecycle/docs/en.md) | Lifecycle trace |
| 05 | [Multi-Agent Coordination Trace](05-multi-agent-coordination-trace/docs/en.md) | Coordination fixture |

