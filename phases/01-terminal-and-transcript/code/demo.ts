import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function appendMessage(path: string, message: Message): void {
  writeFileSync(path, `${JSON.stringify(message)}\n`, { encoding: "utf8", flag: "a" });
}

function readMessages(path: string): Message[] {
  return readFileSync(path, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line) as Message);
}

function runSession(path: string, userInputs: string[]): Message[] {
  for (const text of userInputs) {
    appendMessage(path, { role: "user", content: text });
    appendMessage(path, { role: "assistant", content: `echo: ${text}` });
  }
  return readMessages(path);
}

const transcript = join(mkdtempSync(join(tmpdir(), "hfs-transcript-")), "session.jsonl");
const messages = runSession(transcript, ["hello", "status"]);
const last = messages.at(-1);

if (messages.length !== 4 || last?.content !== "echo: status") {
  throw new Error("transcript replay failed");
}

console.log(`transcript: ${messages.length} messages`);
console.log(last.content);
