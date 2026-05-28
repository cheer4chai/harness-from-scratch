import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

type Lesson = {
  title: string;
  zh: string;
  artifact: string;
  artifactZh: string;
};

type Phase = {
  dir: string;
  enTitle: string;
  zhTitle: string;
  focus: string;
  focusZh: string;
  lessons: Lesson[];
};

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const phases: Phase[] = [
  {
    dir: "01-terminal-and-transcript",
    enTitle: "Terminal & Transcript",
    zhTitle: "终端与 Transcript",
    focus: "terminal interaction, message persistence, replay, streaming, and diagnostics",
    focusZh: "终端交互、消息持久化、重放、流式输出和诊断信息",
    lessons: [
      ["Minimal CLI REPL", "最小 CLI REPL", "Runnable terminal loop", "可运行终端循环"],
      ["Message Types and Transcript Storage", "消息类型与 Transcript 存储", "JSON transcript schema", "JSON transcript schema"],
      ["Session Resume and Replay", "会话恢复与重放", "Replay command", "Replay command"],
      ["Streaming Output and Interrupts", "流式输出与中断", "Interrupt trace", "Interrupt trace"],
      ["Diagnostics and Debug Logs", "诊断信息与 Debug 日志", "Debug log format", "Debug log format"],
    ].map(toLesson),
  },
  {
    dir: "02-llm-message-loop",
    enTitle: "LLM Message Loop",
    zhTitle: "LLM 消息循环",
    focus: "provider adapters, prompt assembly, streaming, tool-use blocks, and usage accounting",
    focusZh: "provider adapter、prompt 组装、流式输出、tool-use block 和用量统计",
    lessons: [
      ["Provider Adapter Interface", "Provider Adapter 接口", "Provider contract", "Provider contract"],
      ["System Prompt, User Context, and Environment Context", "System Prompt、用户上下文与环境上下文", "Prompt assembly trace", "Prompt assembly trace"],
      ["Assistant Streaming and Stop Conditions", "Assistant 流式输出与停止条件", "Streaming fixture", "Streaming fixture"],
      ["Tool-Use Blocks in the Message Loop", "消息循环中的 Tool-Use Block", "Tool-call transcript", "Tool-call transcript"],
      ["Cost, Token, and Turn Accounting", "成本、Token 与轮次统计", "Usage summary", "Usage summary"],
    ].map(toLesson),
  },
  {
    dir: "03-tool-runtime",
    enTitle: "Tool Runtime",
    zhTitle: "工具运行时",
    focus: "tool interfaces, registries, shell execution, file tools, result normalization, and progress",
    focusZh: "tool 接口、registry、shell 执行、文件工具、结果归一化和进度事件",
    lessons: [
      ["Tool Interface and JSON Schema Inputs", "Tool 接口与 JSON Schema 输入", "Tool interface", "Tool interface"],
      ["Tool Registry and Discovery", "Tool Registry 与发现", "Registry trace", "Registry trace"],
      ["Shell Tool with Exit Codes and Timeouts", "带退出码和超时的 Shell Tool", "Shell tool", "Shell tool"],
      ["File Read and Search Tools", "文件读取与搜索工具", "Read/search tools", "Read/search tools"],
      ["Tool Result Normalization", "Tool Result 归一化", "Result normalizer", "Result normalizer"],
      ["Progress Events and Cancellation", "进度事件与取消", "Progress event fixture", "Progress event fixture"],
    ].map(toLesson),
  },
  {
    dir: "04-workspace-editing",
    enTitle: "Workspace Editing",
    zhTitle: "工作区编辑",
    focus: "safe writes, patch edits, diffs, git awareness, multi-file changes, and recovery",
    focusZh: "安全写入、patch 编辑、diff、git 感知、多文件变更和失败恢复",
    lessons: [
      ["Safe File Write Tool", "安全文件写入工具", "Write tool", "Write tool"],
      ["Patch-Based Edit Tool", "基于 Patch 的编辑工具", "Patch tool", "Patch tool"],
      ["Diff Preview and Change Attribution", "Diff 预览与变更归因", "Diff summary", "Diff summary"],
      ["Git Status Awareness", "Git Status 感知", "Git guard", "Git guard"],
      ["Multi-File Edit Workflow", "多文件编辑工作流", "Multi-edit trace", "Multi-edit trace"],
      ["Edit Failure Recovery", "编辑失败恢复", "Recovery fixture", "Recovery fixture"],
    ].map(toLesson),
  },
  {
    dir: "05-permissions-and-safety",
    enTitle: "Permissions & Safety",
    zhTitle: "权限与安全",
    focus: "permission modes, filesystem scope, command risk, approvals, and audit logs",
    focusZh: "权限模式、文件系统作用域、命令风险、用户审批和审计日志",
    lessons: [
      ["Permission Modes and Decisions", "权限模式与决策", "Permission result type", "Permission result type"],
      ["Filesystem Scope Rules", "文件系统作用域规则", "Path guard", "Path guard"],
      ["Shell Command Risk Classification", "Shell 命令风险分类", "Command classifier", "Command classifier"],
      ["User Approval Flow", "用户审批流程", "Approval prompt", "Approval prompt"],
      ["Audit Log for Tool Decisions", "Tool 决策审计日志", "Decision log", "Decision log"],
    ].map(toLesson),
  },
  {
    dir: "06-context-memory-and-compaction",
    enTitle: "Context, Memory & Compaction",
    zhTitle: "上下文、记忆与压缩",
    focus: "context budgeting, attachments, memory files, manual compaction, auto compaction, and resume traces",
    focusZh: "上下文预算、attachment、memory 文件、手动压缩、自动压缩和恢复 trace",
    lessons: [
      ["Context Window Accounting", "上下文窗口统计", "Token budget report", "Token budget report"],
      ["Attachment Injection", "Attachment 注入", "Attachment trace", "Attachment trace"],
      ["Project Memory Files", "项目 Memory 文件", "Memory loader", "Memory loader"],
      ["Manual Compaction", "手动压缩", "Compact command", "Compact command"],
      ["Auto-Compaction Trigger", "自动压缩触发器", "Auto-compact threshold", "Auto-compact threshold"],
      ["Post-Compaction Resume Trace", "压缩后的恢复 Trace", "Resume fixture", "Resume fixture"],
    ].map(toLesson),
  },
  {
    dir: "07-commands-skills-and-hooks",
    enTitle: "Commands, Skills & Hooks",
    zhTitle: "命令、Skills 与 Hooks",
    focus: "slash commands, markdown skills, conditional discovery, hooks, and command attachments",
    focusZh: "slash command、markdown skill、条件发现、hook 和命令 attachment",
    lessons: [
      ["Slash Command Registry", "Slash Command Registry", "Command registry", "Command registry"],
      ["Markdown Skill Loader", "Markdown Skill Loader", "Skill parser", "Skill parser"],
      ["Conditional Skill Discovery", "条件式 Skill 发现", "Discovery fixture", "Discovery fixture"],
      ["Pre-Tool and Post-Tool Hooks", "Pre-Tool 与 Post-Tool Hooks", "Hook runner", "Hook runner"],
      ["Command Output as Attachments", "命令输出作为 Attachment", "Attachment command", "Attachment command"],
    ].map(toLesson),
  },
  {
    dir: "08-mcp-and-plugins",
    enTitle: "MCP & Plugins",
    zhTitle: "MCP 与插件",
    focus: "MCP adapters, local server processes, resources, plugin manifests, and dynamic refresh",
    focusZh: "MCP adapter、本地 server 进程、resources、plugin manifest 和动态刷新",
    lessons: [
      ["MCP Tool Adapter Shape", "MCP Tool Adapter 形状", "MCP adapter", "MCP adapter"],
      ["Local MCP Server Process", "本地 MCP Server 进程", "Local server", "Local server"],
      ["Resource Listing and Reading", "Resource 列表与读取", "Resource tools", "Resource tools"],
      ["Plugin Manifest and Trust Boundary", "Plugin Manifest 与信任边界", "Plugin manifest", "Plugin manifest"],
      ["Dynamic Tool Refresh", "动态 Tool 刷新", "Refresh trace", "Refresh trace"],
    ].map(toLesson),
  },
  {
    dir: "09-subagents-and-teams",
    enTitle: "Subagents & Teams",
    zhTitle: "子 Agent 与团队",
    focus: "agent definitions, forked context, restricted tools, background lifecycle, and coordination",
    focusZh: "agent 定义、forked context、受限工具、后台生命周期和协作 trace",
    lessons: [
      ["Agent Definition File", "Agent Definition 文件", "Agent manifest", "Agent manifest"],
      ["Forked Context and Isolated Transcript", "Forked Context 与隔离 Transcript", "Child transcript", "Child transcript"],
      ["Restricted Tool Sets", "受限 Tool Set", "Tool allowlist", "Tool allowlist"],
      ["Background Agent Lifecycle", "后台 Agent 生命周期", "Lifecycle trace", "Lifecycle trace"],
      ["Multi-Agent Coordination Trace", "多 Agent 协作 Trace", "Coordination fixture", "Coordination fixture"],
    ].map(toLesson),
  },
  {
    dir: "10-verification-and-evals",
    enTitle: "Verification & Evals",
    zhTitle: "验证与评测",
    focus: "verification contracts, build-test-lint pipelines, functional probes, replay fixtures, and benchmarks",
    focusZh: "验证契约、build-test-lint 流水线、功能 probe、replay fixture 和 benchmark",
    lessons: [
      ["Verification Agent Contract", "Verification Agent Contract", "Verifier prompt", "Verifier prompt"],
      ["Build-Test-Lint Verification Pipeline", "Build-Test-Lint 验证流水线", "Verification runner", "Verification runner"],
      ["Functional Probes for CLI, API, and UI Changes", "CLI、API 与 UI 变更的功能 Probe", "Probe library", "Probe library"],
      ["Regression Replay Fixtures", "回归 Replay Fixture", "Replay fixture", "Replay fixture"],
      ["Small Coding-Agent Benchmark Set", "小型 Coding-Agent Benchmark Set", "Benchmark tasks", "Benchmark tasks"],
    ].map(toLesson),
  },
  {
    dir: "11-capstone-claude-code-like-agent",
    enTitle: "Capstone Claude-Code-Like Agent",
    zhTitle: "Capstone Claude-Code-Like Agent",
    focus: "repo inspection, plan-edit-verify loops, recovery, packaging, gap analysis, and release checks",
    focusZh: "仓库检查、plan-edit-verify loop、失败恢复、打包、差距分析和发布检查",
    lessons: [
      ["End-to-End Repo Inspection Task", "端到端 Repo Inspection 任务", "Inspection report", "Inspection report"],
      ["Plan, Edit, Verify, Summarize Loop", "Plan、Edit、Verify、Summarize Loop", "Full agent trace", "Full agent trace"],
      ["Recover from Failed Verification", "从失败验证中恢复", "Recovery trace", "Recovery trace"],
      ["Package the Agent for Local Use", "打包成本地可用 Agent", "Installable package", "Installable package"],
      ["Capability Gap Review Against Claude Code", "对照 Claude Code 的能力差距评审", "Gap matrix", "Gap matrix"],
      ["Public Release Checklist", "公开发布清单", "Release checklist", "Release checklist"],
    ].map(toLesson),
  },
];

function toLesson([title, zh, artifact, artifactZh]: string[]): Lesson {
  return { title, zh, artifact, artifactZh };
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function lessonDir(phase: Phase, index: number, lesson: Lesson): string {
  return join(root, "phases", phase.dir, `${String(index + 1).padStart(2, "0")}-${slugify(lesson.title)}`);
}

function write(path: string, content: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content.trimStart() + "\n", "utf8");
}

function enDoc(phase: Phase, lesson: Lesson, index: number, slug: string): string {
  return `# ${lesson.title}

> Build the ${lesson.artifact.toLowerCase()} slice of the coding agent.

**Phase:** ${phase.enTitle}
**Lesson:** ${index + 1}
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** Previous lessons in this phase

## Problem

The agent needs ${phase.focus}. This lesson isolates **${lesson.title}** so the learner can understand one boundary before combining it with the rest of the runtime.

## Concept

The design has three parts:

- **Input:** the smallest data shape needed by this lesson.
- **Boundary:** the runtime decision or transformation introduced by the lesson.
- **Evidence:** the artifact or trace that proves the behavior works.

## Build It

Run the TypeScript demo:

\`\`\`bash
pnpm exec tsx phases/${phase.dir}/${slug}/code/demo.ts
\`\`\`

The demo is intentionally small. It implements a concrete trace for ${lesson.title} and fails if the expected artifact cannot be produced.

## Trace It

Expected evidence:

\`\`\`text
${slug}: ${lesson.artifact}
status: ready
\`\`\`

## Ship It

The reusable artifact is [outputs/${slug}.md](../outputs/${slug}.md).

## Exercises

1. Add one more input case to the demo.
2. Change the expected artifact and confirm the demo fails before you update the implementation.
3. Connect this lesson's output to the phase-level demo.
`;
}

function zhDoc(phase: Phase, lesson: Lesson, index: number, slug: string): string {
  return `# ${lesson.zh}

> 构建 coding agent 中的 ${lesson.artifactZh} 切片。

**Phase:** ${phase.zhTitle}
**Lesson:** ${index + 1}
**Type:** Build
**Tech Stack:** TypeScript, Node.js
**Time:** ~60-90 minutes
**Prerequisites:** 本 phase 前序 lessons

## Problem

agent 需要具备${phase.focusZh}能力。本章单独拆出 **${lesson.zh}**，让学习者先理解一个边界，再把它组合进完整 runtime。

## Concept

设计分三部分：

- **Input:** 本章需要的最小数据形状。
- **Boundary:** 本章引入的 runtime 决策或转换。
- **Evidence:** 能证明行为有效的 artifact 或 trace。

## Build It

运行 TypeScript demo：

\`\`\`bash
pnpm exec tsx phases/${phase.dir}/${slug}/code/demo.ts
\`\`\`

demo 刻意保持小而具体。它会为 ${lesson.zh} 生成一条可检查 trace，并在无法产出预期 artifact 时失败。

## Trace It

预期证据：

\`\`\`text
${slug}: ${lesson.artifact}
status: ready
\`\`\`

## Ship It

可复用产物是 [outputs/${slug}.zh-CN.md](../outputs/${slug}.zh-CN.md)。

## Exercises

1. 为 demo 增加一个输入场景。
2. 修改 expected artifact，确认 demo 会先失败，再更新实现。
3. 将本章输出接入 phase-level demo。
`;
}

function demoTs(phase: Phase, lesson: Lesson, index: number, slug: string): string {
  const data = {
    phase: phase.enTitle,
    lesson: index + 1,
    title: lesson.title,
    artifact: lesson.artifact,
    focus: phase.focus,
  };
  return `export {};

type LessonTrace = {
  phase: string;
  lesson: number;
  title: string;
  artifact: string;
  steps: string[];
};

function buildTrace(): LessonTrace {
  const data = ${JSON.stringify(data, null, 2)};
  return {
    ...data,
    steps: [
      "define input",
      "cross runtime boundary",
      "record evidence",
    ],
  };
}

function verifyTrace(trace: LessonTrace): void {
  if (trace.steps.length < 3) {
    throw new Error("trace is missing required steps");
  }
  if (!trace.artifact.trim()) {
    throw new Error("artifact is required");
  }
}

const trace = buildTrace();
verifyTrace(trace);

console.log("${slug}: ${lesson.artifact}");
console.log(\`phase: \${trace.phase}\`);
console.log(\`lesson: \${trace.lesson} - \${trace.title}\`);
console.log(\`steps: \${trace.steps.join(" -> ")}\`);
console.log("status: ready");
`;
}

function outputMd(phase: Phase, lesson: Lesson, slug: string): string {
  return `# ${lesson.artifact}

**Phase:** ${phase.enTitle}
**Lesson:** ${lesson.title}

## Purpose

This artifact captures the output expected from the lesson demo.

## Evidence Contract

- The demo must run with \`pnpm exec tsx phases/${phase.dir}/${slug}/code/demo.ts\`.
- The demo must print \`${slug}: ${lesson.artifact}\`.
- The demo must end with \`status: ready\`.
`;
}

function outputZhMd(phase: Phase, lesson: Lesson, slug: string): string {
  return `# ${lesson.artifactZh}

**Phase:** ${phase.zhTitle}
**Lesson:** ${lesson.zh}

## Purpose

这个 artifact 记录本章 demo 应该产出的结果。

## Evidence Contract

- demo 必须能通过 \`pnpm exec tsx phases/${phase.dir}/${slug}/code/demo.ts\` 运行。
- demo 必须输出 \`${slug}: ${lesson.artifact}\`。
- demo 必须以 \`status: ready\` 收尾。
`;
}

function readmeLessons(phase: Phase, lang: "en" | "zh-CN"): string {
  const rows = phase.lessons
    .map((lesson, index) => {
      const slug = `${String(index + 1).padStart(2, "0")}-${slugify(lesson.title)}`;
      const title = lang === "en" ? lesson.title : lesson.zh;
      const artifact = lang === "en" ? lesson.artifact : lesson.artifactZh;
      const doc = lang === "en" ? "docs/en.md" : "docs/zh-CN.md";
      return `| ${String(index + 1).padStart(2, "0")} | [${title}](${slug}/${doc}) | ${artifact} |`;
    })
    .join("\n");
  return `## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
${rows}
`;
}

for (const phase of phases) {
  for (const [index, lesson] of phase.lessons.entries()) {
    const slug = `${String(index + 1).padStart(2, "0")}-${slugify(lesson.title)}`;
    const dir = lessonDir(phase, index, lesson);
    write(join(dir, "docs", "en.md"), enDoc(phase, lesson, index, slug));
    write(join(dir, "docs", "zh-CN.md"), zhDoc(phase, lesson, index, slug));
    write(join(dir, "code", "demo.ts"), demoTs(phase, lesson, index, slug));
    write(join(dir, "outputs", `${slug}.md`), outputMd(phase, lesson, slug));
    write(join(dir, "outputs", `${slug}.zh-CN.md`), outputZhMd(phase, lesson, slug));
  }
}

for (const phase of phases) {
  const phaseDir = join(root, "phases", phase.dir);
  for (const lang of ["en", "zh-CN"] as const) {
    const readme = join(phaseDir, lang === "en" ? "README.md" : "README.zh-CN.md");
    const original = readFileSync(readme, "utf8");
    const next = original.replace(/## Lessons[\s\S]*$/u, readmeLessons(phase, lang));
    write(readme, next);
  }
}

console.log("generated lessons for phases 01-11");
