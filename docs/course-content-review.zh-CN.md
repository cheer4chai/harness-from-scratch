# 课程内容自审

日期：2026-05-28

## 审查范围

本次审查检查当前课程是否能作为开源课程被读者理解，以及每个阶段是否都有可运行示例。

## 覆盖情况

- Phases：12
- Lesson 目录：63
- Phase-level TypeScript demos：12
- Lesson-level TypeScript demos：63
- `pnpm demo` 运行 demo 总数：75
- 双语文档：每个 lesson 都有 `docs/en.md` 和 `docs/zh-CN.md`
- Lesson artifacts：每个 lesson 都至少有一个 `outputs/*.md`

## 已足够清晰的部分

- 仓库已经形成一致的 phase -> lesson -> code/docs/outputs 结构。
- Phase 0 已经明确改成最小 coding agent loop，而不是抽象项目定位；它解释 user input、transcript、model turn、tool action、observation 和 verification 与后续 Phase 的关系。
- 每个 phase README 都链接到真实 lesson 文档，而不是只列占位标题。
- 每个 lesson 都有一个可独立运行的小型 TypeScript demo。
- 根 demo runner 会递归发现所有 `code/demo.ts`，新增 lesson demo 不会被静默跳过。
- 面向开源的文档不再依赖私有本地 Claude Code 源码路径。
- 顶层文档、phase 文档和 lesson 文档都具备英文和中文版本。

## 仍需深化的部分

当前 lesson 文档结构完整，但内容仍然偏简洁。它已经可以作为课程骨架，但还不是最终形态的教学材料。

在把课程视为成熟自学材料前，每个 lesson 还应该继续补充：

- 具体用户故事或失败场景
- 更明确的图示或 message trace
- 更贴近真实机制的实现，而不只是 lesson contract
- 一个负向测试或失败路径 demo
- 同 phase 相邻 lesson 之间的衔接说明

## 示例质量检查

每个阶段都有示例。当前示例刻意保持小而确定：

- Phase 0 展示最小 agent loop，并把每个 loop step 映射到后续实现阶段。
- Phase 1 展示 transcript 写入和重放。
- Phase 2 展示 provider 抽象和 tool-use 形态输出。
- Phase 3 展示 registry 驱动的 shell tool 执行。
- Phase 4 展示文件替换和 diff 证据。
- Phase 5 展示 allow/ask 权限决策。
- Phase 6 展示上下文压缩。
- Phase 7 展示 command 与 hook 分离。
- Phase 8 展示基于 plugin manifest 的 tool 加载。
- Phase 9 展示按角色限制工具的 subagents。
- Phase 10 展示基于命令输出的验证。
- Phase 11 展示 inspect -> plan -> edit -> verify。

这已经足够作为初版开源课程骨架，但还不足以作为完整自学课程，需要继续扩写讲解。

## 建议

将当前仓库定位为可运行课程骨架。下一轮开发应按 phase 逐个深化，建议从 Phase 1 和 Phase 2 开始，因为它们分别提供 transcript 和 message loop 基础，后续所有阶段都会依赖它们。
