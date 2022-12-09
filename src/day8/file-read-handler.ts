const fileReadHandler = (
  accumulator: Array<Array<number>>,
  line: string
): void => {
  accumulator.push(line.split("").map((c) => parseInt(c)));
};

export default fileReadHandler;
