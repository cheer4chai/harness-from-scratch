type Capability = {
  name: string;
  implementedBy: string;
  evidence: string;
};

const capabilities: Capability[] = [
  { name: "user input", implementedBy: "Phase 1", evidence: "prompt event" },
  { name: "transcript", implementedBy: "Phase 1", evidence: "session.jsonl" },
  { name: "model turn", implementedBy: "Phase 2", evidence: "assistant message or tool call" },
  { name: "tool action", implementedBy: "Phase 3/4/5", evidence: "shell/read/edit result" },
  { name: "observation", implementedBy: "Phase 3/4", evidence: "tool result message" },
  { name: "verification", implementedBy: "Phase 10/11", evidence: "check report" },
];

console.log(`agent-loop-checklist: ${capabilities.length} steps`);
for (const capability of capabilities) {
  console.log(`${capability.name} -> ${capability.implementedBy} -> ${capability.evidence}`);
}
