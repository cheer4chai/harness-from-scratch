export {};

type LessonTrace = {
  phase: string;
  lesson: number;
  title: string;
  artifact: string;
  steps: string[];
};

function buildTrace(): LessonTrace {
  const data = {
  "phase": "Commands, Skills & Hooks",
  "lesson": 1,
  "title": "Slash Command Registry",
  "artifact": "Command registry",
  "focus": "slash commands, markdown skills, conditional discovery, hooks, and command attachments"
};
  return {
    ...data,
    steps: [
      "define input",
      "cross runtime boundary",
      "record evidence",
    ],
  };
}

function verifyTrace(trace: LessonTrace): void {
  if (trace.steps.length < 3) {
    throw new Error("trace is missing required steps");
  }
  if (!trace.artifact.trim()) {
    throw new Error("artifact is required");
  }
}

const trace = buildTrace();
verifyTrace(trace);

console.log("01-slash-command-registry: Command registry");
console.log(`phase: ${trace.phase}`);
console.log(`lesson: ${trace.lesson} - ${trace.title}`);
console.log(`steps: ${trace.steps.join(" -> ")}`);
console.log("status: ready");

