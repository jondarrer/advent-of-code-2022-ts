const fileReadHandler = (accumulator: Array<string>, line: string): void => {
  accumulator.push(line);
};

export default fileReadHandler;
