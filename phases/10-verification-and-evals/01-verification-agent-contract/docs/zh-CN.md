# Verification Agent Contract

> 构建 coding agent 中的 Verifier prompt 切片。

**Phase:** 验证与评测
**Lesson:** 1
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** 本 phase 前序 lessons

## Problem

agent 需要具备验证契约、build-test-lint 流水线、功能 probe、replay fixture 和 benchmark能力。本章单独拆出 **Verification Agent Contract**，让学习者先理解一个边界，再把它组合进完整 runtime。

## Concept

设计分三部分：

- **Input:** 本章需要的最小数据形状。
- **Boundary:** 本章引入的 runtime 决策或转换。
- **Evidence:** 能证明行为有效的 artifact 或 trace。

## Build It

运行 TypeScript demo：

```bash
pnpm exec tsx phases/10-verification-and-evals/01-verification-agent-contract/code/demo.ts
```

demo 刻意保持小而具体。它会为 Verification Agent Contract 生成一条可检查 trace，并在无法产出预期 artifact 时失败。

## Trace It

预期证据：

```text
01-verification-agent-contract: Verifier prompt
status: ready
```

## Ship It

可复用产物是 [outputs/01-verification-agent-contract.zh-CN.md](../outputs/01-verification-agent-contract.zh-CN.md)。

## Exercises

1. 为 demo 增加一个输入场景。
2. 修改 expected artifact，确认 demo 会先失败，再更新实现。
3. 将本章输出接入 phase-level demo。

