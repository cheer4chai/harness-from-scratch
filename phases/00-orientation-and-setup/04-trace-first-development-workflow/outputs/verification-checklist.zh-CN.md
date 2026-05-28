# Agent Verification Checklist

每个 agent 行为都要记录：

- `input`：用户任务、消息、文件或上下文。
- `command`：实际运行的命令或 tool call。
- `observed`：真实观察到的输出、diff 或 tool result。
- `expected`：期望结果。
- `verdict`：PASS、FAIL 或 PARTIAL。
- `next step`：失败时下一步怎么修复或缩小问题。

没有命令证据时，不要声称 lesson 可以工作。
