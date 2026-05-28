# Phase 4: Workspace Editing

Teach the agent to modify a repository without losing accountability for each line changed.

## Outcomes

- Write files only through explicit tool calls.
- Apply patch-based edits and report failures clearly.
- Show diffs before and after changes.
- Preserve existing user changes.
- Recover from stale reads and failed patches.

## Design Goal

Editing is where an agent becomes useful and dangerous. This phase makes every write explainable by requiring a target file, a specific replacement, and a diff that can be inspected after the operation.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/04-workspace-editing/code/demo.ts
```

The demo creates a temporary TypeScript file, replaces one string, writes the update, and prints the final line from a unified diff.

## Acceptance Check

- The demo prints `workspace-editing: patched`.
- The edited file contains `console.log('new')`.
- Missing source text raises a failure instead of silently rewriting unrelated content.

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Safe File Write Tool](01-safe-file-write-tool/docs/en.md) | Write tool |
| 02 | [Patch-Based Edit Tool](02-patch-based-edit-tool/docs/en.md) | Patch tool |
| 03 | [Diff Preview and Change Attribution](03-diff-preview-and-change-attribution/docs/en.md) | Diff summary |
| 04 | [Git Status Awareness](04-git-status-awareness/docs/en.md) | Git guard |
| 05 | [Multi-File Edit Workflow](05-multi-file-edit-workflow/docs/en.md) | Multi-edit trace |
| 06 | [Edit Failure Recovery](06-edit-failure-recovery/docs/en.md) | Recovery fixture |

