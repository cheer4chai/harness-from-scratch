# Runnable Lesson Contract

Each lesson is a slice of the agent runtime and must include:

- `code/demo.ts`: runnable TypeScript code that demonstrates the mechanism.
- `docs/en.md`: English lesson material explaining where the mechanism fits in the agent loop.
- `docs/zh-CN.md`: Simplified Chinese lesson material.
- `outputs/`: a reusable artifact such as a schema, prompt, manifest, checklist, or trace.

Every phase and lesson should be verifiable from the repository root, without private paths or manual state.
