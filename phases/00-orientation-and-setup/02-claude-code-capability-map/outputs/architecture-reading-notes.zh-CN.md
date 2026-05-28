# Capability-to-Phase Map

按 agent runtime 边界阅读 Claude Code 启发的能力，并映射到课程实现阶段：

- Conversation runtime：终端输入、transcript、resume、streaming，对应 Phase 1。
- Model runtime：provider adapter、prompt assembly、tool-use block，对应 Phase 2。
- Tool runtime：tool schema、registry、execution、result normalization，对应 Phase 3。
- Workspace runtime：read、search、edit、diff、git status，对应 Phase 4。
- Safety runtime：permission mode、path scope、command risk，对应 Phase 5。
- Context runtime：memory、attachments、compaction、resume，对应 Phase 6。
- Extension runtime：commands、skills、hooks、MCP、plugins，对应 Phase 7/8。
- Agent runtime：subagents、verification、recovery、release，对应 Phase 9/10/11。
