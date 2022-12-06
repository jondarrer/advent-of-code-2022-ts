import { positionOfFirstRepeatedChar } from "./part1";

const part2 = ([chars]: Array<string>): number => {
  let i = 0;
  while (i < chars.length) {
    const repeatedCharPosition = positionOfFirstRepeatedChar(
      chars.substring(i, i + 14)
    );
    if (repeatedCharPosition === -1) {
      return i + 14;
    }
    i += repeatedCharPosition + 1;
  }
};

export default part2;
