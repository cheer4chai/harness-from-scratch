# 打包成本地可用 Agent

> 构建 coding agent 中的 Installable package 切片。

**Phase:** Capstone Claude-Code-Like Agent
**Lesson:** 4
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** 本 phase 前序 lessons

## Problem

agent 需要具备仓库检查、plan-edit-verify loop、失败恢复、打包、差距分析和发布检查能力。本章单独拆出 **打包成本地可用 Agent**，让学习者先理解一个边界，再把它组合进完整 runtime。

## Concept

设计分三部分：

- **Input:** 本章需要的最小数据形状。
- **Boundary:** 本章引入的 runtime 决策或转换。
- **Evidence:** 能证明行为有效的 artifact 或 trace。

## Build It

运行 TypeScript demo：

```bash
pnpm exec tsx phases/11-capstone-claude-code-like-agent/04-package-the-agent-for-local-use/code/demo.ts
```

demo 刻意保持小而具体。它会为 打包成本地可用 Agent 生成一条可检查 trace，并在无法产出预期 artifact 时失败。

## Trace It

预期证据：

```text
04-package-the-agent-for-local-use: Installable package
status: ready
```

## Ship It

可复用产物是 [outputs/04-package-the-agent-for-local-use.zh-CN.md](../outputs/04-package-the-agent-for-local-use.zh-CN.md)。

## Exercises

1. 为 demo 增加一个输入场景。
2. 修改 expected artifact，确认 demo 会先失败，再更新实现。
3. 将本章输出接入 phase-level demo。

