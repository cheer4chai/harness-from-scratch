# 参考架构

本文档把课程目标映射到 Claude Code 源码阅读材料中的具体设计锚点。

课程应该学习其行为和架构层次，而不是复制源码实现。

下方路径是参考锚点，不是本仓库依赖。如果未来 Claude Code 版本调整文件结构，应保留课程目标，并把锚点更新为最接近的等价模块。

## 能力地图

| 课程领域 | 参考锚点 | 学习目标 |
|---|---|---|
| CLI 入口与会话运行时 | `src/entrypoints/cli.tsx`, `src/screens/REPL.tsx`, `src/query.ts` | 理解用户输入如何进入 turn，以及长运行 generator 如何产出 stream event、message、tool summary 和 terminal state。 |
| 消息与 transcript 模型 | `src/utils/messages.ts`, `src/utils/attachments.ts`, `src/services/vcr.ts` | 区分 user、assistant、tool result、attachment、progress 和 replay message。 |
| LLM query loop | `src/query.ts`, `src/services/api/claude.ts` | 理解一次 turn 如何向 provider 发送消息、接收 assistant 输出、执行 tool call 并继续循环。 |
| Tool contract | `src/Tool.ts`, `src/tools.ts` | 学习工具如何暴露名称、schema、prompt、校验、进度、权限检查和渲染元信息。 |
| Tool execution | `src/services/tools/toolExecution.ts` | 学习 tool call 如何被解析、权限拦截、执行、归一化为消息、追踪和上报。 |
| Shell tool | `src/tools/BashTool/BashTool.tsx`, `src/tools/BashTool/bashPermissions.ts`, `src/tools/BashTool/commandSemantics.ts` | 理解 coding agent 如何运行命令，同时避免把 shell 变成无限制逃逸口。 |
| File tools | `src/tools/FileReadTool/FileReadTool.ts`, `src/tools/FileEditTool/FileEditTool.ts`, `src/tools/FileWriteTool/FileWriteTool.ts` | 理解读取、写入和编辑在权限、校验和结果报告上的差异。 |
| Search tools | `src/tools/GrepTool/GrepTool.ts`, `src/tools/GlobTool/GlobTool.ts` | 理解为什么仓库探索需要独立工具面，而不是只依赖 shell。 |
| Todos 与计划 | `src/tools/TodoWriteTool/TodoWriteTool.ts`, `src/tools/EnterPlanModeTool/EnterPlanModeTool.ts`, `src/tools/ExitPlanModeTool/ExitPlanModeV2Tool.ts` | 理解轻量任务状态和 plan gate 如何支撑长任务。 |
| Permissions | `src/hooks/useCanUseTool.tsx`, `src/utils/permissions/permissions.ts`, `src/utils/permissions/PermissionResult.ts`, `src/utils/permissions/shellRuleMatching.ts` | 理解 allow、deny、ask、mode、rule、classifier 和 hook decision 如何协同。 |
| Context 与 compaction | `src/services/compact/compact.ts`, `src/services/compact/autoCompact.ts`, `src/services/compact/microCompact.ts`, `src/commands/compact/compact.ts` | 理解大对话如何被总结，同时保留继续任务所需的状态。 |
| Memory | `src/memdir/memdir.ts`, `src/memdir/findRelevantMemories.ts`, `src/utils/claudemd.ts` | 理解项目和用户记忆如何作为 attachment 注入，而不是隐藏全局状态。 |
| Commands | `src/commands.ts`, `src/commands/compact/compact.ts`, `src/commands/plan/plan.tsx`, `src/commands/plugin/plugin.tsx` | 理解 slash command 如何变成本地动作、prompt、UI 流程或 attachment。 |
| Skills | `src/skills/loadSkillsDir.ts`, `src/tools/SkillTool/SkillTool.ts`, `src/skills/bundled/verify.ts`, `src/skills/bundled/debug.ts` | 理解 markdown 指令如何变成可发现、可调用的能力。 |
| Hooks | `src/utils/hooks.ts`, `src/utils/hooks/registerFrontmatterHooks.ts`, `src/services/tools/toolHooks.ts` | 理解生命周期 hook 如何检查或阻断 tool use，而不是硬编码到每个工具。 |
| MCP | `src/services/mcp/client.ts`, `src/tools/MCPTool/MCPTool.ts`, `src/tools/ListMcpResourcesTool/ListMcpResourcesTool.ts`, `src/tools/ReadMcpResourceTool/ReadMcpResourceTool.ts` | 理解外部工具和资源如何通过协议边界进入 agent runtime。 |
| Plugins | `src/plugins/builtinPlugins.ts`, `src/commands/plugin/plugin.tsx`, `src/commands/plugin/ValidatePlugin.tsx` | 理解 commands、skills、hooks 和 MCP servers 如何打包、安装和建立信任边界。 |
| Subagents | `src/tools/AgentTool/runAgent.ts`, `src/tools/AgentTool/AgentTool.tsx`, `src/tools/AgentTool/loadAgentsDir.ts` | 理解 child agent 如何继承部分上下文、获得受限工具面并记录自己的 transcript。 |
| Verification | `src/tools/AgentTool/built-in/verificationAgent.ts`, `src/skills/bundled/verify.ts`, `src/commands/init-verifiers.ts`, `src/services/vcr.ts` | 理解实现变更如何通过对抗式 verifier、显式命令、replay fixture 和证据来检查。 |
| Observability | `src/services/analytics/index.ts`, `src/services/analytics/metadata.ts`, `src/utils/telemetry/events.ts`, `src/cost-tracker.ts` | 理解应该记录什么，才能诊断 agent 失败且不泄露敏感项目信息。 |

## 80% 目标定义

本课程中“实现 Claude Code 80% 能力”指的是覆盖核心 coding workflow，而不是覆盖所有产品特性。

包含：

- 交互式 CLI 或终端会话
- provider 驱动的消息循环
- 类型化 tool registry 和 tool execution
- shell、read、search、edit、write、todo 和 verification tools
- permission modes 和 scoped approvals
- transcript 持久化与 replay
- context injection 和 compaction
- commands、skills、hooks 和 MCP 风格扩展
- 受限工具的 subagent execution
- 带直接证据的 verification pipeline

第一版公开课程不包含：

- 完整 TUI 体验对齐
- 专有 provider 内部实现
- marketplace、billing、account 和 remote-session 产品流
- 所有平台相关终端集成
- Claude Code 的精确 prompt 文案或源码克隆

## 课程实现倾向

先构建更小的版本：

1. 先做最小 plain CLI，再做复杂终端 UI。
2. 先用本地 JSON transcript，再考虑数据库。
3. 先做一个 provider adapter，再扩展 provider 矩阵。
4. 先做显式 permission check，再做策略引擎。
5. 先做确定性 replay fixture，再做大范围 benchmark。

每个 phase 之后都可以扩展，但第一版应该保证每章都能独立运行。
