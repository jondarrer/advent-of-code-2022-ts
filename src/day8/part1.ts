const part1 = (input: Array<Array<number>>): number => {
  let result = input.length * 4 - 4;
  let transposed = input[0].map((_, colIndex) =>
    input.map((row) => row[colIndex])
  );

  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input.length - 1; j++) {
      if (
        isTreeVisible(input[i][j], {
          top: transposed[j].slice(0, i),
          right: input[i].slice(j + 1),
          bottom: transposed[j].slice(i + 1),
          left: input[i].slice(0, j),
        })
      ) {
        result += 1;
      }
    }
  }

  return result;
};

const isTreeVisible = (
  treeHeight: number,
  others: {
    top: Array<number>;
    right: Array<number>;
    bottom: Array<number>;
    left: Array<number>;
  }
): boolean => {
  const { top, right, bottom, left } = others;
  return (
    treeHeight > maxTreeHeight(top) ||
    treeHeight > maxTreeHeight(right) ||
    treeHeight > maxTreeHeight(bottom) ||
    treeHeight > maxTreeHeight(left)
  );
};

const maxTreeHeight = (trees: Array<number> = []) =>
  trees.reduce((prev, curr) => (curr > prev ? curr : prev), -1);

export default part1;
export { isTreeVisible };
