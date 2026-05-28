# Phase 11: Capstone Claude-Code-Like Agent

Assemble the course pieces into one local coding agent.

## Outcomes

- Inspect an unfamiliar repository.
- Plan a change with explicit success criteria.
- Edit files through controlled tools.
- Verify the result with evidence.
- Recover when verification fails.
- Package and document the agent for public learning.

## Design Goal

The capstone stitches the earlier pieces into the smallest credible coding-agent loop: inspect, plan, edit, verify, and summarize. It remains local and deterministic so learners can understand every step before using real LLM calls.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/11-capstone-claude-code-like-agent/code/demo.ts
```

The demo creates a temporary repository, inspects files, plans a summary update, writes `SUMMARY.md`, and verifies the written content.

## Acceptance Check

- The demo prints `capstone: inspect -> plan -> edit -> verify`.
- `SUMMARY.md` is created in the temporary workspace.
- Verification checks the resulting file content, not just command success.

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [End-to-End Repo Inspection Task](01-end-to-end-repo-inspection-task/docs/en.md) | Inspection report |
| 02 | [Plan, Edit, Verify, Summarize Loop](02-plan-edit-verify-summarize-loop/docs/en.md) | Full agent trace |
| 03 | [Recover from Failed Verification](03-recover-from-failed-verification/docs/en.md) | Recovery trace |
| 04 | [Package the Agent for Local Use](04-package-the-agent-for-local-use/docs/en.md) | Installable package |
| 05 | [Capability Gap Review Against Claude Code](05-capability-gap-review-against-claude-code/docs/en.md) | Gap matrix |
| 06 | [Public Release Checklist](06-public-release-checklist/docs/en.md) | Release checklist |

