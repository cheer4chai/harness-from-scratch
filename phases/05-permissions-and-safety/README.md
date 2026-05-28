# Phase 5: Permissions & Safety

Add explicit control over what the agent may do.

## Outcomes

- Model allow, deny, ask, and bypass decisions.
- Scope filesystem access by working directory.
- Classify shell commands by risk.
- Record user approvals and denials.
- Produce an audit trail for every tool decision.

## Design Goal

Permission checks are part of the runtime contract, not UI decoration. This phase introduces simple decision objects so later tools can block, ask, or allow actions for concrete reasons.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/05-permissions-and-safety/code/demo.ts
```

The demo evaluates a safe command and a risky command inside the workspace, producing `allow` and `ask` decisions.

## Acceptance Check

- The demo prints `permissions: allow, ask`.
- Commands outside the workspace are denied by path scope.
- Risky shell patterns do not auto-run.

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Permission Modes and Decisions](01-permission-modes-and-decisions/docs/en.md) | Permission result type |
| 02 | [Filesystem Scope Rules](02-filesystem-scope-rules/docs/en.md) | Path guard |
| 03 | [Shell Command Risk Classification](03-shell-command-risk-classification/docs/en.md) | Command classifier |
| 04 | [User Approval Flow](04-user-approval-flow/docs/en.md) | Approval prompt |
| 05 | [Audit Log for Tool Decisions](05-audit-log-for-tool-decisions/docs/en.md) | Decision log |

