type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

function tokenEstimate(messages: Message[]): number {
  return messages.reduce((sum, message) => sum + message.content.split(/\s+/).length, 0);
}

function compact(messages: Message[], keepLast = 2): Message[] {
  const older = messages.slice(0, -keepLast);
  const recent = messages.slice(-keepLast);
  return [{ role: "system", content: `summary: ${older.length} earlier messages` }, ...recent];
}

const messages: Message[] = [
  { role: "user", content: "inspect repository" },
  { role: "assistant", content: "found typescript project" },
  { role: "user", content: "add cli" },
  { role: "assistant", content: "edited files" },
];

const compacted = compact(messages);

if (compacted.length !== 3 || !compacted[0]?.content.startsWith("summary:")) {
  throw new Error("compaction failed");
}

console.log(`context: ${tokenEstimate(messages)} -> ${tokenEstimate(compacted)} tokens`);
console.log(compacted[0].content);
