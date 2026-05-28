# Reference Architecture

This document maps the course target to concrete design anchors from Claude Code source-reading material.

The course should mirror behavior and architecture at a learning level. It should not copy source code.

The paths below are reference anchors, not repository dependencies. If a future Claude Code release reorganizes files, keep the lesson goal and update the anchor to the nearest equivalent module.

## Capability Map

| Course Area | Reference Anchors | What to Learn |
|---|---|---|
| CLI entry and session runtime | `src/entrypoints/cli.tsx`, `src/screens/REPL.tsx`, `src/query.ts` | How user input becomes a turn, how a long-running generator yields stream events, messages, tool summaries, and terminal states. |
| Message and transcript model | `src/utils/messages.ts`, `src/utils/attachments.ts`, `src/services/vcr.ts` | How to distinguish user, assistant, tool result, attachment, progress, and replay messages. |
| LLM query loop | `src/query.ts`, `src/services/api/claude.ts` | How a turn repeatedly sends messages to a provider, receives assistant output, executes tool calls, and continues. |
| Tool contract | `src/Tool.ts`, `src/tools.ts` | How tools expose names, schemas, prompts, validation, progress, permission checks, and rendering metadata. |
| Tool execution | `src/services/tools/toolExecution.ts` | How tool calls are resolved, permission-gated, executed, normalized into messages, traced, and reported. |
| Shell tool | `src/tools/BashTool/BashTool.tsx`, `src/tools/BashTool/bashPermissions.ts`, `src/tools/BashTool/commandSemantics.ts` | How a coding agent runs commands without treating the shell as an unbounded escape hatch. |
| File tools | `src/tools/FileReadTool/FileReadTool.ts`, `src/tools/FileEditTool/FileEditTool.ts`, `src/tools/FileWriteTool/FileWriteTool.ts` | How reads, writes, and edits differ in permissions, validation, and result reporting. |
| Search tools | `src/tools/GrepTool/GrepTool.ts`, `src/tools/GlobTool/GlobTool.ts` | Why repository exploration is its own tool surface instead of only shell commands. |
| Todos and planning | `src/tools/TodoWriteTool/TodoWriteTool.ts`, `src/tools/EnterPlanModeTool/EnterPlanModeTool.ts`, `src/tools/ExitPlanModeTool/ExitPlanModeV2Tool.ts` | How lightweight task state and plan gates guide long-running work. |
| Permissions | `src/hooks/useCanUseTool.tsx`, `src/utils/permissions/permissions.ts`, `src/utils/permissions/PermissionResult.ts`, `src/utils/permissions/shellRuleMatching.ts` | How allow, deny, ask, mode, rule, classifier, and hook decisions fit together. |
| Context and compaction | `src/services/compact/compact.ts`, `src/services/compact/autoCompact.ts`, `src/services/compact/microCompact.ts`, `src/commands/compact/compact.ts` | How large conversations are summarized while preserving enough state to continue. |
| Memory | `src/memdir/memdir.ts`, `src/memdir/findRelevantMemories.ts`, `src/utils/claudemd.ts` | How project and user memory become attachments rather than hidden global state. |
| Commands | `src/commands.ts`, `src/commands/compact/compact.ts`, `src/commands/plan/plan.tsx`, `src/commands/plugin/plugin.tsx` | How slash commands become local actions, prompts, UI flows, or attachments. |
| Skills | `src/skills/loadSkillsDir.ts`, `src/tools/SkillTool/SkillTool.ts`, `src/skills/bundled/verify.ts`, `src/skills/bundled/debug.ts` | How markdown instructions become discoverable, invocable capabilities. |
| Hooks | `src/utils/hooks.ts`, `src/utils/hooks/registerFrontmatterHooks.ts`, `src/services/tools/toolHooks.ts` | How lifecycle hooks can inspect or block tool use without being hardcoded into every tool. |
| MCP | `src/services/mcp/client.ts`, `src/tools/MCPTool/MCPTool.ts`, `src/tools/ListMcpResourcesTool/ListMcpResourcesTool.ts`, `src/tools/ReadMcpResourceTool/ReadMcpResourceTool.ts` | How external tools and resources enter the agent runtime through a protocol boundary. |
| Plugins | `src/plugins/builtinPlugins.ts`, `src/commands/plugin/plugin.tsx`, `src/commands/plugin/ValidatePlugin.tsx` | How bundles of commands, skills, hooks, and MCP servers are installed and trusted. |
| Subagents | `src/tools/AgentTool/runAgent.ts`, `src/tools/AgentTool/AgentTool.tsx`, `src/tools/AgentTool/loadAgentsDir.ts` | How a child agent inherits selected context, receives a constrained tool surface, and records its own transcript. |
| Verification | `src/tools/AgentTool/built-in/verificationAgent.ts`, `src/skills/bundled/verify.ts`, `src/commands/init-verifiers.ts`, `src/services/vcr.ts` | How implementation work is checked through an adversarial verifier, explicit commands, replay fixtures, and evidence. |
| Observability | `src/services/analytics/index.ts`, `src/services/analytics/metadata.ts`, `src/utils/telemetry/events.ts`, `src/cost-tracker.ts` | What to record so agent failures are diagnosable without leaking sensitive project details. |

## Target 80% Definition

For this curriculum, "80% of Claude Code" means the learner can build the core coding workflow, not every product feature.

Included:

- interactive CLI or terminal session
- provider-backed message loop
- typed tool registry and tool execution
- shell, read, search, edit, write, todo, and verification tools
- permission modes and scoped approvals
- transcript persistence and replay
- context injection and compaction
- commands, skills, hooks, and MCP-style extension
- subagent execution with restricted tools
- verification pipeline with direct evidence

Out of scope for the first public curriculum:

- full TUI parity
- proprietary provider internals
- marketplace, billing, account, and remote-session product flows
- every platform-specific terminal integration
- exact prompt text or implementation cloning from Claude Code

## Course Implementation Bias

Build smaller versions first:

1. Prefer a minimal plain CLI before a rich terminal UI.
2. Prefer a local JSON transcript before a database.
3. Prefer one provider adapter before a provider matrix.
4. Prefer explicit permission checks before policy engines.
5. Prefer deterministic replay fixtures before broad benchmark suites.

Each phase can later be expanded, but the first pass should keep every lesson runnable in isolation.
