const part1 = ([chars]: Array<string>): number => {
  let i = 0;
  while (i < chars.length) {
    const repeatedCharPosition = positionOfFirstRepeatedChar(
      chars.substring(i, i + 4)
    );
    if (repeatedCharPosition === -1) {
      return i + 4;
    }
    i += repeatedCharPosition + 1;
  }
};

const positionOfFirstRepeatedChar = (chars: string): number => {
  for (let i = 0; i < chars.length - 1; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      if (chars.charAt(i) === chars.charAt(j)) {
        return i;
      }
    }
  }

  return -1;
};

export default part1;
export { positionOfFirstRepeatedChar };
