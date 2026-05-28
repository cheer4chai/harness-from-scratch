# Phase 10: Verification & Evals

Build the habit and machinery that keeps agent edits honest.

## Outcomes

- Define a verification-only agent contract.
- Run build, test, lint, and type checks when available.
- Exercise the changed behavior directly.
- Add adversarial probes for edge cases.
- Replay regression fixtures and maintain a small benchmark set.

## Design Goal

Verification is not "the code looks right." This phase turns checks into command objects with expected outputs so a verifier can report evidence rather than impressions.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/10-verification-and-evals/code/demo.ts
```

The demo runs a Node.js subprocess, captures stdout, compares it to an expected value, and prints a PASS result only after the command output matches.

## Acceptance Check

- The demo prints `verification: PASS`.
- The check records the command output.
- A mismatch fails the assertion.

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Verification Agent Contract](01-verification-agent-contract/docs/en.md) | Verifier prompt |
| 02 | [Build-Test-Lint Verification Pipeline](02-build-test-lint-verification-pipeline/docs/en.md) | Verification runner |
| 03 | [Functional Probes for CLI, API, and UI Changes](03-functional-probes-for-cli-api-and-ui-changes/docs/en.md) | Probe library |
| 04 | [Regression Replay Fixtures](04-regression-replay-fixtures/docs/en.md) | Replay fixture |
| 05 | [Small Coding-Agent Benchmark Set](05-small-coding-agent-benchmark-set/docs/en.md) | Benchmark tasks |

