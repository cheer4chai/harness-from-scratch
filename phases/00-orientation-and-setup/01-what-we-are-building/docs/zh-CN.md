# Coding Agent 的最小闭环

> 不先讲抽象架构，先看一个 agent turn 到底包含哪些动作。

**Phase:** 0
**Lesson:** 1
**Type:** Learn
**Tech Stack:** TypeScript, Node.js
**Time:** ~45 minutes
**Prerequisites:** None

## Problem

如果一开始只说“实现 Claude Code 的 80% 功能”，学习者会不知道第一行代码该写什么。coding agent 的本质不是一个聊天框，而是一个循环：

1. 用户提出一个开发任务。
2. agent 把这次 turn 写入 transcript。
3. agent 把 transcript 和上下文交给模型。
4. 模型返回自然语言或 tool call。
5. runtime 执行 tool，并把 observation 写回 transcript。
6. agent 根据 observation 继续下一轮，直到能验证任务完成。

本章要解决的是：先把这个 loop 变成可观察的数据结构，后续每个 Phase 都只扩展其中一个环节。

## Concept

最小 coding agent 可以先不接真实 LLM，也不真的改代码。它至少要有这些概念：

- **Task:** 用户要完成的开发目标。
- **Transcript:** agent 的工作记忆，记录 user、assistant、tool result。
- **Model turn:** 把当前 transcript 交给模型，让模型决定下一步。
- **Tool action:** shell、read file、edit file、search 等真实动作。
- **Observation:** tool 的结果，必须回写 transcript。
- **Verification:** 用命令、diff 或 trace 判断任务是否真的完成。

这和后面的课程直接对应：Phase 1 做 transcript，Phase 2 做 model turn，Phase 3-5 做 tool action 和权限，Phase 10-11 做 verification 和端到端闭环。

## Build It

运行本章 demo：

```bash
pnpm exec tsx phases/00-orientation-and-setup/01-what-we-are-building/code/demo.ts
```

demo 会输出 agent loop 的 6 个步骤，以及每个步骤后续由哪个 Phase 实现。

## Trace It

预期证据：

```text
agent-loop-checklist: 6 steps
tool action -> shell/read/edit tools
```

## Ship It

可复用产物是 [outputs/capability-checklist.zh-CN.md](../outputs/capability-checklist.zh-CN.md)。

## Exercises

1. 在 demo 中增加一个 `ask permission` step，并说明它属于 Phase 5。
2. 把 `tool action` 拆成 `read file` 和 `edit file` 两步，观察 checklist 如何变化。
3. 写出一个真实任务：“给项目增加测试”，并把它映射到这 6 个 loop step。
