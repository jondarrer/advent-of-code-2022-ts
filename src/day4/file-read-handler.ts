const fileReadHandler = (
  accumulator: Array<Array<Array<number>>>,
  line: string
): void => {
  accumulator.push(
    line.split(",").map((range) => range.split("-").map((r) => parseInt(r)))
  );
};

export default fileReadHandler;
