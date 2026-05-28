# 文件系统作用域规则

> 构建 coding agent 中的 Path guard 切片。

**Phase:** 权限与安全
**Lesson:** 2
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** 本 phase 前序 lessons

## Problem

agent 需要具备权限模式、文件系统作用域、命令风险、用户审批和审计日志能力。本章单独拆出 **文件系统作用域规则**，让学习者先理解一个边界，再把它组合进完整 runtime。

## Concept

设计分三部分：

- **Input:** 本章需要的最小数据形状。
- **Boundary:** 本章引入的 runtime 决策或转换。
- **Evidence:** 能证明行为有效的 artifact 或 trace。

## Build It

运行 TypeScript demo：

```bash
pnpm exec tsx phases/05-permissions-and-safety/02-filesystem-scope-rules/code/demo.ts
```

demo 刻意保持小而具体。它会为 文件系统作用域规则 生成一条可检查 trace，并在无法产出预期 artifact 时失败。

## Trace It

预期证据：

```text
02-filesystem-scope-rules: Path guard
status: ready
```

## Ship It

可复用产物是 [outputs/02-filesystem-scope-rules.zh-CN.md](../outputs/02-filesystem-scope-rules.zh-CN.md)。

## Exercises

1. 为 demo 增加一个输入场景。
2. 修改 expected artifact，确认 demo 会先失败，再更新实现。
3. 将本章输出接入 phase-level demo。

