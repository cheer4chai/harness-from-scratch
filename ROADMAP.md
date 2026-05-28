# Roadmap

Status tracker for the coding-agent curriculum.

**Legend:** Done, In Progress, Planned

Total estimated time: ~70-90 hours.

## Demo Verification

Every phase has a runnable TypeScript demo at `phases/<phase>/code/demo.ts`.

Run all demos:

```bash
pnpm demo
```

The script fails if any phase is missing a demo or if any demo exits non-zero.

## Phase 0: Orientation & Setup - Planned (~4 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | What We Are Building | Planned | ~45 min |
| 02 | Claude Code Capability Map | Planned | ~75 min |
| 03 | Project Skeleton and Test Harness | Planned | ~75 min |
| 04 | Trace-First Development Workflow | Planned | ~45 min |

## Phase 1: Terminal & Transcript - Planned (~6 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Minimal CLI REPL | Planned | ~60 min |
| 02 | Message Types and Transcript Storage | Planned | ~75 min |
| 03 | Session Resume and Replay | Planned | ~75 min |
| 04 | Streaming Output and Interrupts | Planned | ~90 min |
| 05 | Diagnostics and Debug Logs | Planned | ~60 min |

## Phase 2: LLM Message Loop - Planned (~7 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Provider Adapter Interface | Planned | ~75 min |
| 02 | System Prompt, User Context, and Environment Context | Planned | ~75 min |
| 03 | Assistant Streaming and Stop Conditions | Planned | ~90 min |
| 04 | Tool-Use Blocks in the Message Loop | Planned | ~90 min |
| 05 | Cost, Token, and Turn Accounting | Planned | ~60 min |

## Phase 3: Tool Runtime - Planned (~8 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Tool Interface and JSON Schema Inputs | Planned | ~75 min |
| 02 | Tool Registry and Discovery | Planned | ~60 min |
| 03 | Shell Tool with Exit Codes and Timeouts | Planned | ~90 min |
| 04 | File Read and Search Tools | Planned | ~75 min |
| 05 | Tool Result Normalization | Planned | ~75 min |
| 06 | Progress Events and Cancellation | Planned | ~75 min |

## Phase 4: Workspace Editing - Planned (~8 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Safe File Write Tool | Planned | ~75 min |
| 02 | Patch-Based Edit Tool | Planned | ~90 min |
| 03 | Diff Preview and Change Attribution | Planned | ~75 min |
| 04 | Git Status Awareness | Planned | ~60 min |
| 05 | Multi-File Edit Workflow | Planned | ~90 min |
| 06 | Edit Failure Recovery | Planned | ~75 min |

## Phase 5: Permissions & Safety - Planned (~7 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Permission Modes and Decisions | Planned | ~75 min |
| 02 | Filesystem Scope Rules | Planned | ~75 min |
| 03 | Shell Command Risk Classification | Planned | ~90 min |
| 04 | User Approval Flow | Planned | ~60 min |
| 05 | Audit Log for Tool Decisions | Planned | ~60 min |

## Phase 6: Context, Memory & Compaction - Planned (~8 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Context Window Accounting | Planned | ~60 min |
| 02 | Attachment Injection | Planned | ~75 min |
| 03 | Project Memory Files | Planned | ~75 min |
| 04 | Manual Compaction | Planned | ~90 min |
| 05 | Auto-Compaction Trigger | Planned | ~90 min |
| 06 | Post-Compaction Resume Trace | Planned | ~75 min |

## Phase 7: Commands, Skills & Hooks - Planned (~7 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Slash Command Registry | Planned | ~60 min |
| 02 | Markdown Skill Loader | Planned | ~90 min |
| 03 | Conditional Skill Discovery | Planned | ~75 min |
| 04 | Pre-Tool and Post-Tool Hooks | Planned | ~90 min |
| 05 | Command Output as Attachments | Planned | ~60 min |

## Phase 8: MCP & Plugins - Planned (~7 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | MCP Tool Adapter Shape | Planned | ~75 min |
| 02 | Local MCP Server Process | Planned | ~90 min |
| 03 | Resource Listing and Reading | Planned | ~75 min |
| 04 | Plugin Manifest and Trust Boundary | Planned | ~75 min |
| 05 | Dynamic Tool Refresh | Planned | ~60 min |

## Phase 9: Subagents & Teams - Planned (~7 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Agent Definition File | Planned | ~60 min |
| 02 | Forked Context and Isolated Transcript | Planned | ~90 min |
| 03 | Restricted Tool Sets | Planned | ~75 min |
| 04 | Background Agent Lifecycle | Planned | ~90 min |
| 05 | Multi-Agent Coordination Trace | Planned | ~75 min |

## Phase 10: Verification & Evals - Planned (~6 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | Verification Agent Contract | Planned | ~75 min |
| 02 | Build-Test-Lint Verification Pipeline | Planned | ~75 min |
| 03 | Functional Probes for CLI, API, and UI Changes | Planned | ~90 min |
| 04 | Regression Replay Fixtures | Planned | ~75 min |
| 05 | Small Coding-Agent Benchmark Set | Planned | ~75 min |

## Phase 11: Capstone Claude-Code-Like Agent - Planned (~12 hours)

| # | Lesson | Status | Est. |
|---|--------|--------|------|
| 01 | End-to-End Repo Inspection Task | Planned | ~90 min |
| 02 | Plan, Edit, Verify, Summarize Loop | Planned | ~120 min |
| 03 | Recover from Failed Verification | Planned | ~90 min |
| 04 | Package the Agent for Local Use | Planned | ~90 min |
| 05 | Capability Gap Review Against Claude Code | Planned | ~90 min |
| 06 | Public Release Checklist | Planned | ~60 min |
