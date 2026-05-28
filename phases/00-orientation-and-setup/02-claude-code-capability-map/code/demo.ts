const modules = [
  ["conversation runtime", ["Phase 1", "terminal input, transcript, resume"]],
  ["model runtime", ["Phase 2", "provider adapter, prompt assembly, tool-use block"]],
  ["tool runtime", ["Phase 3", "tool schema, registry, execution result"]],
  ["workspace runtime", ["Phase 4", "read, search, edit, diff, git status"]],
  ["safety runtime", ["Phase 5", "permission mode, path scope, command risk"]],
  ["agent runtime", ["Phase 9/10/11", "subagent, verification, recovery"]],
] as const;

console.log(`capability-map: ${modules.length} modules`);
for (const [name, [phase, responsibility]] of modules) {
  console.log(`${name} -> ${phase}: ${responsibility}`);
}
