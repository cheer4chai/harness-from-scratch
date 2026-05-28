# 用 Trace 证明 Agent 行为

> coding agent 最大的风险不是不会说，而是说完成了但没有证据。

**Phase:** 0
**Lesson:** 4
**Type:** Verify
**Tech Stack:** TypeScript, Node.js
**Time:** ~45 minutes
**Prerequisites:** Phase 0 lesson 3

## Problem

coding agent 会生成计划、修改文件、运行工具，也会犯错。如果课程只让 demo 打印“success”，学习者无法判断 agent 是否真的完成了开发任务。

因此本课程从 Phase 0 就要求 trace-first：每个 agent 能力必须留下可检查证据。这个习惯会贯穿后续所有章节：

- Phase 1 的 trace 是 transcript messages。
- Phase 2 的 trace 是 model request 和 assistant response。
- Phase 3 的 trace 是 tool call 和 tool result。
- Phase 4 的 trace 是 diff。
- Phase 5 的 trace 是 permission decision。
- Phase 10-11 的 trace 是 verification report。

## Concept

一个有效 trace 至少包含：

- **command:** 实际运行了什么命令或 tool。
- **input:** agent 当时基于什么消息、文件或上下文做决定。
- **observed:** 实际观察到了什么输出。
- **expected:** 期望结果是什么。
- **verdict:** PASS、FAIL 或 PARTIAL。

这让课程从一开始就接近真实 coding agent 的工作方式：不是“我认为代码应该可以”，而是“我运行了什么，观察到了什么，所以可以/不可以继续”。

## Build It

运行：

```bash
pnpm exec tsx phases/00-orientation-and-setup/04-trace-first-development-workflow/code/demo.ts
```

demo 会从一个 command result 构建小型 verification report。后续阶段会把这个模式扩展到 build、test、lint、UI probe 和端到端 repo 任务。

## Trace It

预期证据：

```text
trace-first: PASS
observed: 4
```

## Ship It

可复用产物是 [outputs/verification-checklist.zh-CN.md](../outputs/verification-checklist.zh-CN.md)。

## Exercises

1. 把 demo 的 `expected` 改成错误值，确认 verdict 变成 `FAIL`。
2. 为 trace 增加 `input` 字段，记录用户任务。
3. 写出一个 Phase 4 文件编辑 demo 应该记录的 trace 字段。
