# 每章都可运行的 TypeScript Demo 骨架

> 学 coding agent 不能只看概念图，每个机制都要能在本地运行。

**Phase:** 0
**Lesson:** 3
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~75 minutes
**Prerequisites:** Phase 0 lesson 2

## Problem

coding agent 的实现会快速变复杂：CLI、消息循环、tool registry、文件编辑、权限、压缩、MCP、子 agent 都会相互连接。如果课程没有统一的 demo 结构，读者很难判断某一章到底实现了什么，也无法把后续章节组合起来。

本章定义每个 lesson 的最小运行契约。它和 agent 的关系很直接：agent 的每个能力都必须能先作为一个小 demo 独立运行，再进入完整 runtime。

## Concept

每个 lesson 都是一个 agent runtime 切片，必须包含：

- `code/demo.ts`：当前机制的最小 TypeScript 实现。
- `docs/en.md` 和 `docs/zh-CN.md`：解释这个机制在 agent loop 中的位置。
- `outputs/`：沉淀本章可复用产物，例如 schema、prompt、checklist、manifest。
- 可验证输出：demo 成功时打印稳定 trace，失败时抛出错误并非零退出。

例如 Phase 3 的 shell tool，不应该只讲“工具调用很重要”；它应该有一个 `demo.ts` 注册 tool、执行命令、返回结构化 result，并在输出不符合预期时失败。

## Build It

运行：

```bash
pnpm exec tsx phases/00-orientation-and-setup/03-project-skeleton-and-test-harness/code/demo.ts
```

demo 会检查 lesson skeleton 所需目录，并证明一个 lesson 至少具备代码、文档和产物三个边界。

## Trace It

预期证据：

```text
skeleton: code, docs, outputs
```

## Ship It

可复用产物是 [outputs/skeleton-contract.zh-CN.md](../outputs/skeleton-contract.zh-CN.md)。

## Exercises

1. 为 skeleton 增加 `outputs` 缺失时的失败场景。
2. 在一个临时 lesson 目录中运行同样的检查，观察缺失目录如何报错。
3. 写出 Phase 3 `Tool Runtime` 的 lesson skeleton 应该包含哪些 artifact。
