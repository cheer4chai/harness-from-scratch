# Phase 6: Context, Memory & Compaction

Keep long coding sessions coherent as the transcript grows.

## Outcomes

- Estimate context usage before provider calls.
- Inject attachments from files, commands, and memory.
- Load project memory from explicit files.
- Compact old transcript segments into summaries.
- Resume after compaction without losing the active task.

## Design Goal

Long sessions need a visible context policy. This phase shows how older turns can be summarized while recent turns remain intact, creating a bridge toward real compaction and memory injection.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/06-context-memory-and-compaction/code/demo.ts
```

The demo estimates tokens with a simple word count, compacts older messages into one summary message, and keeps the last two messages unchanged.

## Acceptance Check

- The demo prints a `context: before -> after tokens` line.
- The compacted transcript has one summary plus two recent messages.
- Compaction is explicit and inspectable.

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Context Window Accounting](01-context-window-accounting/docs/en.md) | Token budget report |
| 02 | [Attachment Injection](02-attachment-injection/docs/en.md) | Attachment trace |
| 03 | [Project Memory Files](03-project-memory-files/docs/en.md) | Memory loader |
| 04 | [Manual Compaction](04-manual-compaction/docs/en.md) | Compact command |
| 05 | [Auto-Compaction Trigger](05-auto-compaction-trigger/docs/en.md) | Auto-compact threshold |
| 06 | [Post-Compaction Resume Trace](06-post-compaction-resume-trace/docs/en.md) | Resume fixture |

