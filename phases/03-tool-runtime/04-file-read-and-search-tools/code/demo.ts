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
  "phase": "Tool Runtime",
  "lesson": 4,
  "title": "File Read and Search Tools",
  "artifact": "Read/search tools",
  "focus": "tool interfaces, registries, shell execution, file tools, result normalization, and progress"
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

console.log("04-file-read-and-search-tools: Read/search tools");
console.log(`phase: ${trace.phase}`);
console.log(`lesson: ${trace.lesson} - ${trace.title}`);
console.log(`steps: ${trace.steps.join(" -> ")}`);
console.log("status: ready");

