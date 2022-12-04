const part1 = (input: Array<Array<Array<number>>>): number => {
  let pairedRangesFullyContained = 0;

  for (let i = 0; i < input.length; i++) {
    if (oneRangeContainsTheOther(input[i][0], input[i][1])) {
      pairedRangesFullyContained++;
    }
  }

  return pairedRangesFullyContained;
};

const oneRangeContainsTheOther = (
  [aStart, aEnd]: Array<number>,
  [bStart, bEnd]: Array<number>
): boolean => {
  return (
    (aStart <= bStart && aEnd >= bEnd) || (bStart <= aStart && bEnd >= aEnd)
  );
};

export default part1;
export { oneRangeContainsTheOther };
