# 路线图

coding agent 课程的阶段跟踪表。

**状态说明：** Done 表示完成，In Progress 表示进行中，Planned 表示计划中。

总预计时间：约 70 到 90 小时。

## Demo 验证

每个阶段都有一个可运行 TypeScript demo，路径为 `phases/<phase>/code/demo.ts`。

运行全部 demo：

```bash
pnpm demo
```

该脚本会在任意阶段缺少 demo 或 demo 非零退出时失败。

## Phase 0: 定位与环境 - Planned（约 4 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | 我们要构建什么 | Planned | ~45 min |
| 02 | Claude Code 能力地图 | Planned | ~75 min |
| 03 | 项目骨架与测试 Harness | Planned | ~75 min |
| 04 | Trace-First 开发工作流 | Planned | ~45 min |

## Phase 1: 终端与 Transcript - Planned（约 6 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | 最小 CLI REPL | Planned | ~60 min |
| 02 | 消息类型与 Transcript 存储 | Planned | ~75 min |
| 03 | 会话恢复与重放 | Planned | ~75 min |
| 04 | 流式输出与中断 | Planned | ~90 min |
| 05 | 诊断信息与 Debug 日志 | Planned | ~60 min |

## Phase 2: LLM 消息循环 - Planned（约 7 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Provider Adapter 接口 | Planned | ~75 min |
| 02 | System Prompt、用户上下文与环境上下文 | Planned | ~75 min |
| 03 | Assistant 流式输出与停止条件 | Planned | ~90 min |
| 04 | 消息循环中的 Tool-Use Block | Planned | ~90 min |
| 05 | 成本、Token 与轮次统计 | Planned | ~60 min |

## Phase 3: 工具运行时 - Planned（约 8 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Tool 接口与 JSON Schema 输入 | Planned | ~75 min |
| 02 | Tool Registry 与发现 | Planned | ~60 min |
| 03 | 带退出码和超时的 Shell Tool | Planned | ~90 min |
| 04 | 文件读取与搜索工具 | Planned | ~75 min |
| 05 | Tool Result 归一化 | Planned | ~75 min |
| 06 | 进度事件与取消 | Planned | ~75 min |

## Phase 4: 工作区编辑 - Planned（约 8 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | 安全文件写入工具 | Planned | ~75 min |
| 02 | 基于 Patch 的编辑工具 | Planned | ~90 min |
| 03 | Diff 预览与变更归因 | Planned | ~75 min |
| 04 | Git Status 感知 | Planned | ~60 min |
| 05 | 多文件编辑工作流 | Planned | ~90 min |
| 06 | 编辑失败恢复 | Planned | ~75 min |

## Phase 5: 权限与安全 - Planned（约 7 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | 权限模式与决策 | Planned | ~75 min |
| 02 | 文件系统作用域规则 | Planned | ~75 min |
| 03 | Shell 命令风险分类 | Planned | ~90 min |
| 04 | 用户审批流程 | Planned | ~60 min |
| 05 | Tool 决策审计日志 | Planned | ~60 min |

## Phase 6: 上下文、记忆与压缩 - Planned（约 8 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | 上下文窗口统计 | Planned | ~60 min |
| 02 | Attachment 注入 | Planned | ~75 min |
| 03 | 项目 Memory 文件 | Planned | ~75 min |
| 04 | 手动压缩 | Planned | ~90 min |
| 05 | 自动压缩触发器 | Planned | ~90 min |
| 06 | 压缩后的恢复 Trace | Planned | ~75 min |

## Phase 7: 命令、Skills 与 Hooks - Planned（约 7 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Slash Command Registry | Planned | ~60 min |
| 02 | Markdown Skill Loader | Planned | ~90 min |
| 03 | 条件式 Skill 发现 | Planned | ~75 min |
| 04 | Pre-Tool 与 Post-Tool Hooks | Planned | ~90 min |
| 05 | 命令输出作为 Attachment | Planned | ~60 min |

## Phase 8: MCP 与插件 - Planned（约 7 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | MCP Tool Adapter 形状 | Planned | ~75 min |
| 02 | 本地 MCP Server 进程 | Planned | ~90 min |
| 03 | Resource 列表与读取 | Planned | ~75 min |
| 04 | Plugin Manifest 与信任边界 | Planned | ~75 min |
| 05 | 动态 Tool 刷新 | Planned | ~60 min |

## Phase 9: 子 Agent 与团队 - Planned（约 7 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Agent Definition 文件 | Planned | ~60 min |
| 02 | Forked Context 与隔离 Transcript | Planned | ~90 min |
| 03 | 受限 Tool Set | Planned | ~75 min |
| 04 | 后台 Agent 生命周期 | Planned | ~90 min |
| 05 | 多 Agent 协作 Trace | Planned | ~75 min |

## Phase 10: 验证与评测 - Planned（约 6 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Verification Agent Contract | Planned | ~75 min |
| 02 | Build-Test-Lint 验证流水线 | Planned | ~75 min |
| 03 | CLI、API 与 UI 变更的功能 Probe | Planned | ~90 min |
| 04 | 回归 Replay Fixture | Planned | ~75 min |
| 05 | 小型 Coding-Agent Benchmark Set | Planned | ~75 min |

## Phase 11: Capstone Claude-Code-Like Agent - Planned（约 12 小时）

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | 端到端 Repo Inspection 任务 | Planned | ~90 min |
| 02 | Plan、Edit、Verify、Summarize Loop | Planned | ~120 min |
| 03 | 从失败验证中恢复 | Planned | ~90 min |
| 04 | 打包成本地可用 Agent | Planned | ~90 min |
| 05 | 对照 Claude Code 的能力差距评审 | Planned | ~90 min |
| 06 | 公开发布清单 | Planned | ~60 min |
