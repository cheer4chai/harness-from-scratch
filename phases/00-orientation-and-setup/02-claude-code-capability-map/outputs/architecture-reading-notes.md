# Capability-to-Phase Map

Read Claude Code-inspired behavior through agent runtime boundaries and map each boundary to a course phase:

- Conversation runtime: terminal input, transcript, resume, streaming, implemented in Phase 1.
- Model runtime: provider adapter, prompt assembly, tool-use block, implemented in Phase 2.
- Tool runtime: tool schema, registry, execution, result normalization, implemented in Phase 3.
- Workspace runtime: read, search, edit, diff, git status, implemented in Phase 4.
- Safety runtime: permission mode, path scope, command risk, implemented in Phase 5.
- Context runtime: memory, attachments, compaction, resume, implemented in Phase 6.
- Extension runtime: commands, skills, hooks, MCP, plugins, implemented in Phase 7/8.
- Agent runtime: subagents, verification, recovery, release, implemented in Phase 9/10/11.
