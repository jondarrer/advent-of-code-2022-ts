import { CommandType, FileType, CommandOrOutput } from "./types";

const fileReadHandler = (
  accumulator: Array<CommandOrOutput>,
  line: string
): void => {
  let output;
  const parts = line.split(" ");
  if (parts[0] === "$") {
    output = {
      type: "cmd",
      cmd: parts[1] === "cd" ? CommandType.ChangeDir : CommandType.List,
      args: parts[2] || "",
    };
  } else {
    output = {
      type: "output",
      fileType: parts[0] === "dir" ? FileType.Dir : FileType.File,
      name: parts[1],
      size: parts[0] === "dir" ? undefined : parseInt(parts[0]),
    };
  }
  accumulator.push(output);
};

export default fileReadHandler;
