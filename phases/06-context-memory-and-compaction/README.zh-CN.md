# Phase 6: 上下文、记忆与压缩

随着 transcript 增长，保持长 coding session 的连贯性。

## Outcomes

- 在 provider call 前估算 context 使用量。
- 从文件、命令和 memory 注入 attachments。
- 从显式文件加载 project memory。
- 将旧 transcript segments 压缩成 summaries。
- 压缩后恢复并继续当前任务。

## Design Goal

长会话需要可见的上下文策略。本阶段展示如何把旧 turns 总结为摘要，同时保留最近 turns，为真实 compaction 和 memory injection 打基础。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/06-context-memory-and-compaction/code/demo.ts
```

该 demo 用简单 word count 估算 tokens，把旧消息压缩成一条 summary message，并保留最后两条消息。

## Acceptance Check

- demo 输出 `context: before -> after tokens` 格式的行。
- 压缩后的 transcript 包含一个 summary 和两个 recent messages。
- compaction 是显式且可检查的。

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [上下文窗口统计](01-context-window-accounting/docs/zh-CN.md) | Token budget report |
| 02 | [Attachment 注入](02-attachment-injection/docs/zh-CN.md) | Attachment trace |
| 03 | [项目 Memory 文件](03-project-memory-files/docs/zh-CN.md) | Memory loader |
| 04 | [手动压缩](04-manual-compaction/docs/zh-CN.md) | Compact command |
| 05 | [自动压缩触发器](05-auto-compaction-trigger/docs/zh-CN.md) | Auto-compact threshold |
| 06 | [压缩后的恢复 Trace](06-post-compaction-resume-trace/docs/zh-CN.md) | Resume fixture |

