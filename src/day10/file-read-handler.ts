import { Command, Operation } from "./types";

const fileReadHandler = (accumulator: Array<Command>, line: string): void => {
  let command: Command;
  const parts = line.split(" ");

  if (parts.length > 1) {
    command = { operation: Operation.AddX, value: parseInt(parts[1]) };
  } else {
    command = { operation: Operation.Noop };
  }
  accumulator.push(command);
};

export default fileReadHandler;
