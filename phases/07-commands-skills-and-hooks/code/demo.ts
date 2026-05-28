type Context = {
  events: string[];
};

type Command = (context: Context, args: string) => string;
type Hook = (context: Context, commandName: string) => void;

const commands: Record<string, Command> = {
  status: (context, args) => `status: ${context.events.length} events, args=${args}`,
};

const auditHook: Hook = (context, commandName) => {
  context.events.push(`command:${commandName}`);
};

function runCommand(raw: string, context: Context, hooks: Hook[]): string {
  const [nameWithSlash, ...argParts] = raw.split(" ");
  const name = nameWithSlash.replace("/", "");
  const command = commands[name];
  if (!command) {
    throw new Error(`unknown command: ${name}`);
  }
  for (const hook of hooks) {
    hook(context, name);
  }
  return command(context, argParts.join(" "));
}

const context: Context = { events: [] };
const output = runCommand("/status demo", context, [auditHook]);

if (output !== "status: 1 events, args=demo") {
  throw new Error("command output mismatch");
}

console.log("commands-skills-hooks: invoked");
console.log(output);
