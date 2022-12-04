import { oneRangeContainsTheOther } from "./part1";

const part2 = (input: Array<Array<Array<number>>>): number => {
  let pairedRangesOverlapping = 0;

  for (let i = 0; i < input.length; i++) {
    if (
      oneRangeOverlapsTheOther(input[i][0], input[i][1]) ||
      oneRangeContainsTheOther(input[i][0], input[i][1])
    ) {
      pairedRangesOverlapping++;
    } else {
      console.log(input[i][0], input[i][1]);
    }
  }

  return pairedRangesOverlapping;
};

const oneRangeOverlapsTheOther = (
  [aStart, aEnd]: Array<number>,
  [bStart, bEnd]: Array<number>
): boolean => {
  return (
    (aStart <= bStart && aEnd >= bStart) || (aStart <= bEnd && aEnd >= bEnd)
  );
};

export default part2;
export { oneRangeOverlapsTheOther };
