# Agent Loop Checklist

The course target is not one large tool implemented all at once. It is a coding-agent loop built step by step:

- `user input`: receive the development task, implemented in Phase 1.
- `transcript`: persist user, assistant, and tool-result messages, implemented in Phase 1.
- `model turn`: send context to the model and receive the next action, implemented in Phase 2.
- `tool action`: run shell, read, search, and edit operations, implemented in Phase 3/4.
- `permission decision`: allow, ask, or deny before risky actions, implemented in Phase 5.
- `observation`: write tool results back into the transcript, implemented in Phase 3/4.
- `verification`: prove completion with command output, diff, or probes, implemented in Phase 10/11.

After this loop exists, commands, skills, MCP, subagents, and compaction make the loop more capable.
