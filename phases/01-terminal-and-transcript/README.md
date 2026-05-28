# Phase 1: Terminal & Transcript

Build the local interaction substrate before adding model intelligence.

## Outcomes

- Implement a minimal CLI loop.
- Store typed user, assistant, system, and diagnostic messages.
- Replay and resume sessions from transcript files.
- Handle streaming output, interrupts, and basic debug logs.

## Design Goal

The transcript is the source of truth. Before adding an LLM, the course builds a deterministic local loop that writes and reads JSONL messages so later phases can replay failures and inspect agent behavior.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/01-terminal-and-transcript/code/demo.ts
```

The demo creates a temporary `session.jsonl`, appends two user turns and two assistant echoes, reloads the transcript, and verifies the final message.

## Acceptance Check

- The demo prints `transcript: 4 messages`.
- The final replayed message is `echo: status`.
- The transcript is JSONL and can be loaded without hidden state.

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Minimal CLI REPL](01-minimal-cli-repl/docs/en.md) | Runnable terminal loop |
| 02 | [Message Types and Transcript Storage](02-message-types-and-transcript-storage/docs/en.md) | JSON transcript schema |
| 03 | [Session Resume and Replay](03-session-resume-and-replay/docs/en.md) | Replay command |
| 04 | [Streaming Output and Interrupts](04-streaming-output-and-interrupts/docs/en.md) | Interrupt trace |
| 05 | [Diagnostics and Debug Logs](05-diagnostics-and-debug-logs/docs/en.md) | Debug log format |

