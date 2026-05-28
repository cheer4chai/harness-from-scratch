# Phase 10: 验证与评测

构建让 agent edits 保持可信的习惯和机制。

## Outcomes

- 定义 verification-only agent contract。
- 在可用时运行 build、test、lint 和 type checks。
- 直接执行被修改的行为。
- 为边界场景添加 adversarial probes。
- replay regression fixtures，并维护小型 benchmark set。

## Design Goal

验证不是“代码看起来对”。本阶段把 checks 变成带 expected output 的 command objects，让 verifier 报告证据而不是印象。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/10-verification-and-evals/code/demo.ts
```

该 demo 运行一个 Node.js subprocess，捕获 stdout，与 expected value 比较，并且只有命令输出匹配后才打印 PASS。

## Acceptance Check

- demo 输出 `verification: PASS`。
- check 会记录 command output。
- 输出不匹配时 assertion 失败。

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Verification Agent Contract](01-verification-agent-contract/docs/zh-CN.md) | Verifier prompt |
| 02 | [Build-Test-Lint 验证流水线](02-build-test-lint-verification-pipeline/docs/zh-CN.md) | Verification runner |
| 03 | [CLI、API 与 UI 变更的功能 Probe](03-functional-probes-for-cli-api-and-ui-changes/docs/zh-CN.md) | Probe library |
| 04 | [回归 Replay Fixture](04-regression-replay-fixtures/docs/zh-CN.md) | Replay fixture |
| 05 | [小型 Coding-Agent Benchmark Set](05-small-coding-agent-benchmark-set/docs/zh-CN.md) | Benchmark tasks |

