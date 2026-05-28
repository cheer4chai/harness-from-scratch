# Phase 5: 权限与安全

为 agent 能做什么加入显式控制。

## Outcomes

- 建模 allow、deny、ask 和 bypass decisions。
- 按 working directory 限制文件系统访问。
- 按风险分类 shell commands。
- 记录用户 approval 和 denial。
- 为每个 tool decision 生成 audit trail。

## Design Goal

权限检查是 runtime contract 的一部分，不是 UI 装饰。本阶段引入简单 decision object，让后续 tools 可以基于具体原因 block、ask 或 allow。

## Hands-On Demo

运行：

```bash
pnpm exec tsx phases/05-permissions-and-safety/code/demo.ts
```

该 demo 在 workspace 内评估一个安全命令和一个高风险命令，分别产生 `allow` 和 `ask` decisions。

## Acceptance Check

- demo 输出 `permissions: allow, ask`。
- workspace 外的命令会被 path scope deny。
- 高风险 shell pattern 不会自动运行。

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [权限模式与决策](01-permission-modes-and-decisions/docs/zh-CN.md) | Permission result type |
| 02 | [文件系统作用域规则](02-filesystem-scope-rules/docs/zh-CN.md) | Path guard |
| 03 | [Shell 命令风险分类](03-shell-command-risk-classification/docs/zh-CN.md) | Command classifier |
| 04 | [用户审批流程](04-user-approval-flow/docs/zh-CN.md) | Approval prompt |
| 05 | [Tool 决策审计日志](05-audit-log-for-tool-decisions/docs/zh-CN.md) | Decision log |

