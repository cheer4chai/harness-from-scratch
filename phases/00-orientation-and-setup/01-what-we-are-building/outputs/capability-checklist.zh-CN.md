# Agent Loop Checklist

课程目标不是一次性实现一个庞大工具，而是逐步实现一个 coding agent loop：

- `user input`：接收开发任务，Phase 1 实现。
- `transcript`：保存 user、assistant、tool result，Phase 1 实现。
- `model turn`：把上下文交给模型并接收下一步动作，Phase 2 实现。
- `tool action`：执行 shell、read、search、edit 等动作，Phase 3/4 实现。
- `permission decision`：在高风险动作前 allow、ask 或 deny，Phase 5 实现。
- `observation`：把工具结果写回 transcript，Phase 3/4 实现。
- `verification`：用命令输出、diff 或 probe 证明任务完成，Phase 10/11 实现。

完成这个 loop 后，commands、skills、MCP、subagents、compaction 都是让 loop 更强的扩展能力。
