import fileReadHandler from "./file-read-handler";
import { SupplyStacks } from "./supply-stacks";

describe("day5/file-read-handler", () => {
  it("should read in strings and convert them to numbers", () => {
    const lines = [
      "    [D]    ",
      "[N] [C]    ",
      "[Z] [M] [P]",
      " 1   2   3 ",
      "",
      "move 1 from 2 to 1",
      "move 3 from 1 to 3",
      "move 2 from 2 to 1",
      "move 1 from 1 to 2",
    ];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    const result = new SupplyStacks();
    result.stacks = [["Z", "N"], ["M", "C", "D"], ["P"]];
    result.rearrangementProcedures = [
      [1, 2, 1],
      [3, 1, 3],
      [2, 2, 1],
      [1, 1, 2],
    ];
    expect(accumulator).toEqual([result]);
  });
});
