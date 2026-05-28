# 章节模板

创建每个章节目录时使用此模板。

## 目录结构

```text
NN-lesson-name/
+-- code/
|   +-- README.md
|   +-- demo.ts
+-- docs/
|   +-- en.md
|   +-- zh-CN.md
+-- outputs/
    +-- ...
```

## 文档格式

```markdown
# Lesson Title

> 用一句话说明本章要构建的能力。

**Phase:** N
**Lesson:** N
**Type:** Build | Learn | Verify
**Tech Stack:** TypeScript, Node.js
**Time:** ~N minutes
**Prerequisites:** Phase N lesson N

## Problem

描述没有这个能力时 coding agent 会出现的具体失败场景。尽量绑定到可观察工作流。

## Concept

解释理解该机制所需的最小模型。优先使用图、消息 trace、文件树和短示例，而不是泛泛理论。

## Build It

实现最小可运行 TypeScript 版本。代码应该能在本地运行，并产生可检查 trace。

## Trace It

给出精确运行命令和预期证据。章节通过需要输出证据，而不只是有代码。

## Harden It

只补充本章需要的失败处理。先命名失败，再展示检查方式。

## Ship It

在 `outputs/` 中保存一个可复用产物：prompt、skill、agent 定义、MCP server、benchmark fixture 或验证清单。

## Reference Anchors

- `src/example-module.ts` - 本章借鉴的 Claude Code 设计点

## Exercises

1. 基础扩展。
2. 失败路径 probe。
3. 与前序章节集成。
```

## 输出格式

### Prompt

```markdown
---
name: prompt-name
description: 这个 prompt 解决什么问题
phase: N
lesson: N
---

Prompt body.
```

### Skill

```markdown
---
name: skill-name
description: 什么时候使用这个 skill
phase: N
lesson: N
---

Skill instructions.
```

### Agent

```markdown
---
name: agent-name
description: 什么时候启动这个 agent
allowed_tools:
  - shell
  - read_file
---

Agent system instructions.
```

### Verification Fixture

```json
{
  "name": "fixture-name",
  "task": "面向用户的任务描述",
  "success_criteria": [
    "可观察验收标准"
  ],
  "commands": [
    "要运行的命令"
  ]
}
```
