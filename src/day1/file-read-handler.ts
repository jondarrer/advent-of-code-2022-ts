const fileReadHandler = (
  accumulator: Array<number | null>,
  line: string
): void => {
  accumulator.push(line === "" ? null : parseInt(line));
};

export default fileReadHandler;
