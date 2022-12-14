const part2 = (input: Array<Array<number>>): number => {
  let result = 0;
  let current = 0;
  let transposed = input[0].map((_, colIndex) =>
    input.map((row) => row[colIndex])
  );

  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input.length - 1; j++) {
      current = calculateTreeScenicScore(input[i][j], {
        top: transposed[j].slice(0, i).reverse(),
        right: input[i].slice(j + 1),
        bottom: transposed[j].slice(i + 1),
        left: input[i].slice(0, j).reverse(),
      });
      if (current > result) {
        result = current;
      }
    }
  }

  return result;
};

const calculateTreeScenicScore = (
  treeHeight: number,
  others: {
    top: Array<number>;
    right: Array<number>;
    bottom: Array<number>;
    left: Array<number>;
  }
): number => {
  const { top, right, bottom, left } = others;
  return (
    howManyTreesCanBeSeen(treeHeight, top) *
    howManyTreesCanBeSeen(treeHeight, right) *
    howManyTreesCanBeSeen(treeHeight, bottom) *
    howManyTreesCanBeSeen(treeHeight, left)
  );
};

const howManyTreesCanBeSeen = (
  treeHeight: number,
  trees: Array<number>
): number => {
  let noOfTreesSeen = 0;

  for (let i = 0; i < trees.length; i++) {
    noOfTreesSeen++;
    switch (true) {
      case treeHeight > trees[i]:
        break;
      default:
        return noOfTreesSeen;
    }
  }

  return noOfTreesSeen;
};

export default part2;
export { calculateTreeScenicScore, howManyTreesCanBeSeen };
