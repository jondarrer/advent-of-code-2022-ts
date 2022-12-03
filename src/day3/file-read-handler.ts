const fileReadHandler = (
  accumulator: Array<Array<string>>,
  line: string
): void => {
  accumulator.push(line.split(""));
};

export default fileReadHandler;
