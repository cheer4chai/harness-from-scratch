# Phase 0: 最小 Coding Agent 骨架

先把“coding agent 到底是什么”落成一个最小闭环：接收用户任务、保存对话状态、决定是否需要工具、执行动作、验证结果。后续所有 Phase 都是在扩展这个闭环中的一个环节。

## Outcomes

- 说清楚 coding agent 的核心 loop：`user input -> transcript -> model turn -> tool action -> observation -> next turn`。
- 将 Claude Code 启发的能力拆成后续可实现模块，而不是停留在源码阅读。
- 创建一个每章都能运行的 TypeScript demo 结构。
- 建立验证习惯：agent 声称完成任务前，必须留下命令输出、文件 diff 或 trace。

## Design Goal

Phase 0 不是泛泛介绍项目，而是搭建后面实现 agent 的共同语言。读完本阶段，学习者应该知道每个后续章节在 agent loop 中解决什么问题：Phase 1 负责 transcript，Phase 2 负责 model turn，Phase 3-5 负责工具与权限，Phase 6-11 负责长上下文、扩展、子 agent 和端到端验证。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/00-orientation-and-setup/code/demo.ts
```

该 demo 建模一个最小 agent loop，并输出每个环节后续会在哪个 Phase 实现。它不调用真实 LLM，也不编辑真实仓库；它的目的只是把课程目标从“做一个 Claude Code 类工具”拆成可编码、可验证的模块。

## Acceptance Check

- demo 输出 `agent-loop: 6 steps`。
- 每个 step 都能映射到一个后续 Phase。
- 输出中能看到 `tool action -> Phase 3/4/5` 这样的实现路径。
- 不需要外部依赖或 API key。

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Coding Agent 的最小闭环](01-what-we-are-building/docs/zh-CN.md) | Agent loop checklist |
| 02 | [从 Claude Code 能力拆到课程模块](02-claude-code-capability-map/docs/zh-CN.md) | Capability-to-phase map |
| 03 | [每章都可运行的 TypeScript Demo 骨架](03-project-skeleton-and-test-harness/docs/zh-CN.md) | Runnable lesson contract |
| 04 | [用 Trace 证明 Agent 行为](04-trace-first-development-workflow/docs/zh-CN.md) | Agent verification checklist |
