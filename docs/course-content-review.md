# Course Content Review

Date: 2026-05-28

## Review Scope

This review checks whether the current curriculum is understandable as an open-source course and whether every phase has runnable examples.

## Coverage Summary

- Phases: 12
- Lesson directories: 63
- Phase-level TypeScript demos: 12
- Lesson-level TypeScript demos: 63
- Total demos run by `pnpm demo`: 75
- Bilingual docs: every lesson has `docs/en.md` and `docs/zh-CN.md`
- Lesson artifacts: every lesson has at least one `outputs/*.md`

## What Is Clear Enough

- The repository now has a consistent phase -> lesson -> code/docs/outputs shape.
- Phase 0 now presents the minimal coding-agent loop instead of abstract project positioning; it explains how user input, transcript, model turn, tool action, observation, and verification connect to later phases.
- Every phase README links to real lesson documents instead of listing placeholder lesson titles.
- Every lesson has a small TypeScript demo that can be run independently.
- The root demo runner recursively discovers all `code/demo.ts` files, so newly added lesson demos are not silently skipped.
- The public-facing docs no longer depend on a private local Claude Code source path.
- The English and Chinese documentation are both present for top-level docs, phase docs, and lesson docs.

## What Still Needs Depth

The current lesson docs are structurally complete but intentionally concise. They are good enough as a curriculum scaffold, but not yet deep enough as final teaching material.

Before treating the course as mature, each lesson should be expanded with:

- a concrete user story or failure case
- a more specific diagram or message trace
- a richer implementation that exercises the real mechanism, not only the lesson contract
- one negative test or failure-path demo
- clearer links between adjacent lessons in the same phase

## Example Quality Check

Each phase has an example. Current examples are deliberately small and deterministic:

- Phase 0 demonstrates the minimal agent loop and maps each loop step to later implementation phases.
- Phase 1 demonstrates transcript writing and replay.
- Phase 2 demonstrates provider abstraction and tool-use-shaped output.
- Phase 3 demonstrates registry-based shell tool execution.
- Phase 4 demonstrates file replacement and diff evidence.
- Phase 5 demonstrates allow/ask permission decisions.
- Phase 6 demonstrates context compaction.
- Phase 7 demonstrates command and hook separation.
- Phase 8 demonstrates plugin-manifest-driven tool loading.
- Phase 9 demonstrates role-constrained subagents.
- Phase 10 demonstrates command-output-based verification.
- Phase 11 demonstrates inspect -> plan -> edit -> verify.

This is sufficient for an initial open-source scaffold. It is not yet sufficient for a complete self-study course without further explanatory expansion.

## Recommendation

Treat the repository as a runnable curriculum skeleton. The next development pass should deepen one phase at a time, starting with Phase 1 and Phase 2, because those create the transcript and message loop foundations used by every later phase.
