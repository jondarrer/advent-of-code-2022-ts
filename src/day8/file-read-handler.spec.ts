import fileReadHandler from "./file-read-handler";

describe("day8/file-read-handler", () => {
  it("should read in strings and convert them to arrays of numbers", () => {
    const lines = ["30373", "25512", "65332", "33549", "35390"];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
      [3, 3, 5, 4, 9],
      [3, 5, 3, 9, 0],
    ]);
  });
});
