# 从 Claude Code 能力拆到课程模块

> 读 Claude Code 的目的，是把成熟产品能力拆成我们能逐步实现的 agent 模块。

**Phase:** 0
**Lesson:** 2
**Type:** Learn
**Tech Stack:** TypeScript, Node.js
**Time:** ~75 minutes
**Prerequisites:** Phase 0 lesson 1

## Problem

只读 Claude Code 源码或能力介绍，容易得到一堆孤立名词：tool、permission、hook、MCP、subagent、compaction。真正要学会实现 coding agent，需要把这些能力放回 agent loop：

- 这个能力解决用户工作流中的哪个问题？
- 它接收什么输入，输出什么结果？
- 它应该在哪个 Phase 中被实现？
- 它的最小 demo 如何证明行为成立？

本章的目标不是复刻 Claude Code 文件结构，而是建立“产品能力 -> 课程模块 -> 可运行 demo”的映射。

## Concept

把 Claude Code 当作目标行为参考时，可以按 agent runtime 边界拆分：

- **Conversation runtime:** 终端输入、transcript、resume、streaming。
- **Model runtime:** prompt 组装、provider adapter、tool-use block。
- **Tool runtime:** tool schema、registry、执行、结果归一化。
- **Workspace runtime:** read、search、edit、diff、git 状态。
- **Safety runtime:** permission mode、路径边界、危险命令审批。
- **Extension runtime:** commands、skills、hooks、MCP、plugins。
- **Agent runtime:** subagent、隔离上下文、验证与恢复。

后续课程每个 Phase 都会实现其中一块，并在 Phase 11 合成一个 Claude-Code-like agent。

## Build It

运行：

```bash
pnpm exec tsx phases/00-orientation-and-setup/02-claude-code-capability-map/code/demo.ts
```

demo 会输出从课程模块到参考锚点的紧凑映射。

## Trace It

预期证据：

```text
capability-map: 6 modules
tool runtime -> Phase 3, Phase 4, Phase 5
```

## Ship It

可复用产物是 [outputs/architecture-reading-notes.zh-CN.md](../outputs/architecture-reading-notes.zh-CN.md)。

## Exercises

1. 选一个 Claude Code 能力，例如 `/compact`，判断它属于哪个 runtime 边界。
2. 为 `permission` 增加一条你认为必须验证的 evidence，例如 `deny outside workspace`。
3. 把 capability map 中任意一项改成自己的命名，并保持 Phase 映射不变。
