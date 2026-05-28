# Phase 3: Tool Runtime

Turn model tool requests into controlled local actions.

## Outcomes

- Define a typed tool interface with input schema and result shape.
- Register and discover tools by name.
- Execute shell, read, and search tools with structured errors.
- Normalize tool results back into LLM-consumable messages.
- Emit progress and support cancellation.

## Design Goal

Tools turn model intent into local effects, so the runtime must be explicit about names, inputs, return values, timeouts, and failures. This phase keeps the registry small while making every tool call traceable.

## Hands-On Demo

Run:

```bash
pnpm exec tsx phases/03-tool-runtime/code/demo.ts
```

The demo parses a JSON tool call, dispatches it through a registry, runs a shell command with a timeout, and returns a normalized result object.

## Acceptance Check

- The demo prints `tool-runtime: ok=True`.
- The shell tool returns `tool-runtime`.
- Tool lookup happens through the registry, not direct function calls from the caller.

## Lessons

| # | Lesson | Target Artifact |
|---|--------|-----------------|
| 01 | [Tool Interface and JSON Schema Inputs](01-tool-interface-and-json-schema-inputs/docs/en.md) | Tool interface |
| 02 | [Tool Registry and Discovery](02-tool-registry-and-discovery/docs/en.md) | Registry trace |
| 03 | [Shell Tool with Exit Codes and Timeouts](03-shell-tool-with-exit-codes-and-timeouts/docs/en.md) | Shell tool |
| 04 | [File Read and Search Tools](04-file-read-and-search-tools/docs/en.md) | Read/search tools |
| 05 | [Tool Result Normalization](05-tool-result-normalization/docs/en.md) | Result normalizer |
| 06 | [Progress Events and Cancellation](06-progress-events-and-cancellation/docs/en.md) | Progress event fixture |

