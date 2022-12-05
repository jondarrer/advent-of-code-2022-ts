import part2 from "./part2";
import { SupplyStacks } from "./supply-stacks";

describe("day5/part2", () => {
  it("should work out the result", () => {
    // Arrange
    const input = new SupplyStacks();
    input.stacks = [["Z", "N"], ["M", "C", "D"], ["P"]];
    input.rearrangementProcedures = [
      [1, 2, 1],
      [3, 1, 3],
      [2, 2, 1],
      [1, 1, 2],
    ];

    // Act & Assert
    expect(part2([input])).toEqual("MCD");
  });
});
