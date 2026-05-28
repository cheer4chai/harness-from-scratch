# Agent Verification Checklist

Every agent behavior should record:

- `input`: the user task, message, file, or context.
- `command`: the command or tool call that actually ran.
- `observed`: the real output, diff, or tool result.
- `expected`: the expected result.
- `verdict`: PASS, FAIL, or PARTIAL.
- `next step`: what to fix or narrow down when the verdict fails.

Do not claim a lesson works without command evidence.
