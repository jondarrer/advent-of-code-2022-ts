import fileReadHandler from "./file-read-handler";

describe("day2/file-read-handler", () => {
  it("should read in strings and convert them to numbers", () => {
    const lines = ["A Y", "B X", "C Z"];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      ["A", "Y"],
      ["B", "X"],
      ["C", "Z"],
    ]);
  });
});
