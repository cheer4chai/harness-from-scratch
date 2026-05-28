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
  "phase": "Verification & Evals",
  "lesson": 5,
  "title": "Small Coding-Agent Benchmark Set",
  "artifact": "Benchmark tasks",
  "focus": "verification contracts, build-test-lint pipelines, functional probes, replay fixtures, and benchmarks"
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

console.log("05-small-coding-agent-benchmark-set: Benchmark tasks");
console.log(`phase: ${trace.phase}`);
console.log(`lesson: ${trace.lesson} - ${trace.title}`);
console.log(`steps: ${trace.steps.join(" -> ")}`);
console.log("status: ready");

