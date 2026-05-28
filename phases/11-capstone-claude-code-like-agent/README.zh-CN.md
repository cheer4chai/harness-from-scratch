# Phase 11: Capstone Claude-Code-Like Agent

把课程中的各个部件组装成一个本地 coding agent。

## Outcomes

- Inspect 一个陌生仓库。
- 用明确成功标准制定 plan。
- 通过受控 tools 编辑文件。
- 用证据验证结果。
- 当验证失败时恢复。
- 为公开学习打包和文档化 agent。

## Design Goal

Capstone 将前面机制串成最小可信的 coding-agent loop：inspect、plan、edit、verify、summarize。它仍然保持本地和确定性，让学习者在使用真实 LLM call 前理解每一步。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/11-capstone-claude-code-like-agent/code/demo.ts
```

该 demo 创建一个临时仓库，inspect files，计划 summary 更新，写入 `SUMMARY.md`，并验证写入内容。

## Acceptance Check

- demo 输出 `capstone: inspect -> plan -> edit -> verify`。
- `SUMMARY.md` 会在临时 workspace 中创建。
- verification 检查最终文件内容，而不只是命令成功。

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [端到端 Repo Inspection 任务](01-end-to-end-repo-inspection-task/docs/zh-CN.md) | Inspection report |
| 02 | [Plan、Edit、Verify、Summarize Loop](02-plan-edit-verify-summarize-loop/docs/zh-CN.md) | Full agent trace |
| 03 | [从失败验证中恢复](03-recover-from-failed-verification/docs/zh-CN.md) | Recovery trace |
| 04 | [打包成本地可用 Agent](04-package-the-agent-for-local-use/docs/zh-CN.md) | Installable package |
| 05 | [对照 Claude Code 的能力差距评审](05-capability-gap-review-against-claude-code/docs/zh-CN.md) | Gap matrix |
| 06 | [公开发布清单](06-public-release-checklist/docs/zh-CN.md) | Release checklist |

