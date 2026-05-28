# Runnable Lesson Contract

每个 lesson 都是一个 agent runtime 切片，必须包含：

- `code/demo.ts`：可运行 TypeScript 代码，展示本章机制。
- `docs/en.md`：英文课程材料，说明它在 agent loop 中的位置。
- `docs/zh-CN.md`：简体中文课程材料。
- `outputs/`：可复用 artifact，例如 schema、prompt、manifest、checklist 或 trace。

每个 phase 和 lesson 都应该能从仓库根目录验证，不能依赖私有路径或手工状态。
