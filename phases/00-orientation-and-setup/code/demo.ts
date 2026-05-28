type AgentLoopStep = {
  step: string;
  phase: string;
  purpose: string;
};

const loop: AgentLoopStep[] = [
  { step: "user input", phase: "Phase 1", purpose: "capture a development task" },
  { step: "transcript", phase: "Phase 1", purpose: "persist conversation state" },
  { step: "model turn", phase: "Phase 2", purpose: "decide the next assistant action" },
  { step: "tool action", phase: "Phase 3/4/5", purpose: "run shell, read files, edit files, and enforce permission" },
  { step: "observation", phase: "Phase 3/4", purpose: "write tool results back into context" },
  { step: "verification", phase: "Phase 10/11", purpose: "prove the task is complete" },
];

function renderLoop(steps: AgentLoopStep[]): string[] {
  return steps.map((item, index) => `${index + 1}. ${item.step} -> ${item.phase}: ${item.purpose}`);
}

if (loop.length !== 6) {
  throw new Error("minimal agent loop should have 6 steps");
}

console.log(`agent-loop: ${loop.length} steps`);
for (const line of renderLoop(loop)) {
  console.log(line);
}
