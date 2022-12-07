const fileReadHandler = (accumulator: Array<object>, line: string): void => {
  let output;
  const parts = line.split(" ");
  if (parts[0] === "$") {
    output = {
      cmd: parts[1],
      args: parts[2] || "",
    };
  } else {
    output = {
      type: parts[0] === "dir" ? "dir" : "file",
      name: parts[1],
      size: parts[0] === "dir" ? undefined : parseInt(parts[0]),
    };
  }
  accumulator.push(output);
};

export default fileReadHandler;
