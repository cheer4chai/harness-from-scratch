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
  "phase": "Context, Memory & Compaction",
  "lesson": 5,
  "title": "Auto-Compaction Trigger",
  "artifact": "Auto-compact threshold",
  "focus": "context budgeting, attachments, memory files, manual compaction, auto compaction, and resume traces"
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

console.log("05-auto-compaction-trigger: Auto-compact threshold");
console.log(`phase: ${trace.phase}`);
console.log(`lesson: ${trace.lesson} - ${trace.title}`);
console.log(`steps: ${trace.steps.join(" -> ")}`);
console.log("status: ready");

