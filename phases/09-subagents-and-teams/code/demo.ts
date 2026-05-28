class Agent {
  constructor(
    readonly name: string,
    readonly allowedTools: Set<string>,
  ) {}

  run(task: string): string {
    if (task.includes("edit") && !this.allowedTools.has("write_file")) {
      return `${this.name}: refused edit`;
    }
    return `${this.name}: completed ${task}`;
  }
}

function spawn(parentTask: string): [string, string] {
  const reviewer = new Agent("reviewer", new Set(["read_file", "grep"]));
  const implementer = new Agent("implementer", new Set(["read_file", "grep", "write_file"]));
  return [reviewer.run(`review ${parentTask}`), implementer.run(`edit ${parentTask}`)];
}

const [reviewResult, editResult] = spawn("cli");

if (reviewResult !== "reviewer: completed review cli" || editResult !== "implementer: completed edit cli") {
  throw new Error("subagent coordination failed");
}

console.log("subagents: 2 results");
console.log(reviewResult);
console.log(editResult);
