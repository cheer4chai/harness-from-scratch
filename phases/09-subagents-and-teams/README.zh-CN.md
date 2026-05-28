# Phase 9: 子 Agent 与团队

为聚焦任务运行受约束的 child agents。

## Outcomes

- 用 instructions 和 allowed tools 定义 agents。
- 将 context fork 到隔离 child transcript。
- 按 agent role 限制 tools。
- 运行 background agents 并收集输出。
- 追踪 parent 和 child agents 之间的协作。

## Design Goal

Subagent 只有在 scope 受限时才真正有用。本阶段建模带不同 allowed tools 的角色化 agents，并展示 parent 如何收集它们的结果。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/09-subagents-and-teams/code/demo.ts
```

该 demo 启动 reviewer 和 implementer。reviewer 只有 read/search tools，implementer 还可以 write。

## Acceptance Check

- demo 输出 `subagents: 2 results`。
- reviewer 和 implementer 产生独立输出。
- tool permissions 绑定在 agent roles 上。

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Agent Definition 文件](01-agent-definition-file/docs/zh-CN.md) | Agent manifest |
| 02 | [Forked Context 与隔离 Transcript](02-forked-context-and-isolated-transcript/docs/zh-CN.md) | Child transcript |
| 03 | [受限 Tool Set](03-restricted-tool-sets/docs/zh-CN.md) | Tool allowlist |
| 04 | [后台 Agent 生命周期](04-background-agent-lifecycle/docs/zh-CN.md) | Lifecycle trace |
| 05 | [多 Agent 协作 Trace](05-multi-agent-coordination-trace/docs/zh-CN.md) | Coordination fixture |

