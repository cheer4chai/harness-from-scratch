# Phase 4: 工作区编辑

教 agent 修改仓库，同时让每一行变更都有责任归因。

## Outcomes

- 只通过显式 tool call 写文件。
- 应用 patch-based edits，并清晰报告失败。
- 在变更前后展示 diff。
- 保留已有用户改动。
- 从 stale read 和 failed patch 中恢复。

## Design Goal

编辑让 agent 变得有用，也变得危险。本阶段要求每次写入都有目标文件、具体 replacement 和可检查 diff。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/04-workspace-editing/code/demo.ts
```

该 demo 创建一个临时 TypeScript 文件，替换一个字符串，写入更新，并打印 unified diff 的最后一行。

## Acceptance Check

- demo 输出 `workspace-editing: patched`。
- 编辑后的文件包含 `console.log('new')`。
- source text 缺失时会失败，而不是静默重写无关内容。

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [安全文件写入工具](01-safe-file-write-tool/docs/zh-CN.md) | Write tool |
| 02 | [基于 Patch 的编辑工具](02-patch-based-edit-tool/docs/zh-CN.md) | Patch tool |
| 03 | [Diff 预览与变更归因](03-diff-preview-and-change-attribution/docs/zh-CN.md) | Diff summary |
| 04 | [Git Status 感知](04-git-status-awareness/docs/zh-CN.md) | Git guard |
| 05 | [多文件编辑工作流](05-multi-file-edit-workflow/docs/zh-CN.md) | Multi-edit trace |
| 06 | [编辑失败恢复](06-edit-failure-recovery/docs/zh-CN.md) | Recovery fixture |

