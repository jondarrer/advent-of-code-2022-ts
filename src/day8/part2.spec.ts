import part2, {
  calculateTreeScenicScore,
  howManyTreesCanBeSeen,
} from "./part2";

describe("day8/part2", () => {
  it("should work out the highest scenic score possible for any tree", () => {
    const input = [
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
      [3, 3, 5, 4, 9],
      [3, 5, 3, 9, 0],
    ];
    expect(part2(input)).toEqual(8);
  });
});
describe("day8/calculateTreeScenicScore", () => {
  it("should work out the scenic score for a specific tree 5, {[0], [5, 1, 2], [5, 3, 5], [2]} = true", () => {
    expect(
      calculateTreeScenicScore(5, {
        top: [0],
        right: [5, 1, 2],
        bottom: [5, 3, 5],
        left: [2],
      })
    ).toEqual(1);
  });
  it("should work out the scenic score for a specific tree 5, {[3], [1, 2], [3, 5, 3], [5, 2]} = true", () => {
    expect(
      calculateTreeScenicScore(5, {
        top: [3],
        right: [1, 2],
        bottom: [3, 5, 3],
        left: [5, 2],
      })
    ).toEqual(4);
  });
  it("should work out the scenic score for a specific tree 1, {[7], [2], [3, 4, 9], [5, 5, 2]} = false", () => {
    expect(
      calculateTreeScenicScore(1, {
        top: [7],
        right: [2],
        bottom: [3, 4, 9],
        left: [5, 5, 2],
      })
    ).toEqual(1);
  });
  it("should work out the scenic score for a specific tree 5, {[5, 0], [3, 3, 2], [3, 5], [6]} = true", () => {
    expect(
      calculateTreeScenicScore(5, {
        top: [5, 0],
        right: [3, 3, 2],
        bottom: [3, 5],
        left: [6],
      })
    ).toEqual(6);
  });
  it("should work out the scenic score for a specific tree 3, {[5, 3], [3, 2], [5, 3], [5, 6]} = false", () => {
    expect(
      calculateTreeScenicScore(3, {
        top: [5, 3],
        right: [3, 2],
        bottom: [5, 3],
        left: [5, 6],
      })
    ).toEqual(1);
  });
  it("should work out the scenic score for a specific tree 3, {[1, 7], [2], [4, 9], [3, 5, 6]} = true", () => {
    expect(
      calculateTreeScenicScore(3, {
        top: [1, 7],
        right: [2],
        bottom: [4, 9],
        left: [3, 5, 6],
      })
    ).toEqual(2);
  });
  it("should work out the scenic score for a specific tree 3, {[5, 5, 0], [5, 4, 9], [5], [3]} = false", () => {
    expect(
      calculateTreeScenicScore(3, {
        top: [5, 5, 0],
        right: [5, 4, 9],
        bottom: [5],
        left: [3],
      })
    ).toEqual(1);
  });
  it("should work out the scenic score for a specific tree 5, {[3, 5, 3], [4, 9], [3], [3, 3]} = true", () => {
    expect(
      calculateTreeScenicScore(5, {
        top: [3, 5, 3],
        right: [4, 9],
        bottom: [3],
        left: [3, 3],
      })
    ).toEqual(8);
  });
  it("should work out the scenic score for a specific tree 4, {[3, 1, 7], [9], [9], [5, 3, 3]} = false", () => {
    expect(
      calculateTreeScenicScore(4, {
        top: [3, 1, 7],
        right: [9],
        bottom: [9],
        left: [5, 3, 3],
      })
    ).toEqual(3);
  });
});
describe("day8/howManyTreesCanBeSeen", () => {
  it("should work out how many trees can been seen 1, []", () => {
    const treeHeight = 1;
    const trees = [];
    expect(howManyTreesCanBeSeen(treeHeight, trees)).toEqual(0);
  });
  it("should work out how many trees can been seen 1, [2]", () => {
    const treeHeight = 1;
    const trees = [2];
    expect(howManyTreesCanBeSeen(treeHeight, trees)).toEqual(1);
  });
  it("should work out how many trees can been seen 1, [1, 2]", () => {
    const treeHeight = 1;
    const trees = [0, 2, 1];
    expect(howManyTreesCanBeSeen(treeHeight, trees)).toEqual(2);
  });
});
