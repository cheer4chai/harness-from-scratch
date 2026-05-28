# 多 Agent 协作 Trace

> 构建 coding agent 中的 Coordination fixture 切片。

**Phase:** 子 Agent 与团队
**Lesson:** 5
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** 本 phase 前序 lessons

## Problem

agent 需要具备agent 定义、forked context、受限工具、后台生命周期和协作 trace能力。本章单独拆出 **多 Agent 协作 Trace**，让学习者先理解一个边界，再把它组合进完整 runtime。

## Concept

设计分三部分：

- **Input:** 本章需要的最小数据形状。
- **Boundary:** 本章引入的 runtime 决策或转换。
- **Evidence:** 能证明行为有效的 artifact 或 trace。

## Build It

运行 TypeScript demo：

```bash
pnpm exec tsx phases/09-subagents-and-teams/05-multi-agent-coordination-trace/code/demo.ts
```

demo 刻意保持小而具体。它会为 多 Agent 协作 Trace 生成一条可检查 trace，并在无法产出预期 artifact 时失败。

## Trace It

预期证据：

```text
05-multi-agent-coordination-trace: Coordination fixture
status: ready
```

## Ship It

可复用产物是 [outputs/05-multi-agent-coordination-trace.zh-CN.md](../outputs/05-multi-agent-coordination-trace.zh-CN.md)。

## Exercises

1. 为 demo 增加一个输入场景。
2. 修改 expected artifact，确认 demo 会先失败，再更新实现。
3. 将本章输出接入 phase-level demo。

