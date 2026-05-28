# Phase 1: 终端与 Transcript

在加入模型智能之前，先构建本地交互底座。

## Outcomes

- 实现最小 CLI loop。
- 存储类型化 user、assistant、system 和 diagnostic messages。
- 从 transcript 文件重放和恢复会话。
- 处理流式输出、中断和基础 debug 日志。

## Design Goal

Transcript 是事实来源。加入 LLM 前，课程先构建一个确定性的本地 loop，写入和读取 JSONL messages，后续 phase 才能 replay 失败并检查 agent 行为。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/01-terminal-and-transcript/code/demo.ts
```

该 demo 创建临时 `session.jsonl`，追加两个 user turn 和两个 assistant echo，重新加载 transcript，并验证最后一条消息。

## Acceptance Check

- demo 输出 `transcript: 4 messages`。
- 最后一条 replay message 是 `echo: status`。
- transcript 是 JSONL，不依赖隐藏状态即可加载。

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [最小 CLI REPL](01-minimal-cli-repl/docs/zh-CN.md) | 可运行终端循环 |
| 02 | [消息类型与 Transcript 存储](02-message-types-and-transcript-storage/docs/zh-CN.md) | JSON transcript schema |
| 03 | [会话恢复与重放](03-session-resume-and-replay/docs/zh-CN.md) | Replay command |
| 04 | [流式输出与中断](04-streaming-output-and-interrupts/docs/zh-CN.md) | Interrupt trace |
| 05 | [诊断信息与 Debug 日志](05-diagnostics-and-debug-logs/docs/zh-CN.md) | Debug log format |

