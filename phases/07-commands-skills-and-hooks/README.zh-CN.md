# Phase 7: 命令、Skills 与 Hooks

让 agent 可扩展，而不是把每个 workflow 都硬编码进核心 loop。

## Outcomes

- 注册 slash commands。
- 从磁盘加载 markdown skills。
- 在任务需要时发现 conditional skills。
- 运行 pre-tool 和 post-tool hooks。
- 将 command output 转换为 attachments。

## Design Goal

扩展能力应该叠加在 loop 之上，而不是每加一个 workflow 就修改 loop。本阶段把 command dispatch 和 hook execution 分开，让两者可以独立演进。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/07-commands-skills-and-hooks/code/demo.ts
```

该 demo 注册 `/status` command 和 audit hook。运行命令时，hook 会先记录事件，然后 command 计算输出。

## Acceptance Check

- demo 输出 `commands-skills-hooks: invoked`。
- status output 报告记录了一个 event。
- hook 行为与 command 行为分离。

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Slash Command Registry](01-slash-command-registry/docs/zh-CN.md) | Command registry |
| 02 | [Markdown Skill Loader](02-markdown-skill-loader/docs/zh-CN.md) | Skill parser |
| 03 | [条件式 Skill 发现](03-conditional-skill-discovery/docs/zh-CN.md) | Discovery fixture |
| 04 | [Pre-Tool 与 Post-Tool Hooks](04-pre-tool-and-post-tool-hooks/docs/zh-CN.md) | Hook runner |
| 05 | [命令输出作为 Attachment](05-command-output-as-attachments/docs/zh-CN.md) | Attachment command |

