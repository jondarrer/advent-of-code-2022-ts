import part1 from "./part1";
import { SupplyStacks } from "./supply-stacks";

describe("day5/part1", () => {
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
    expect(part1([input])).toEqual("CMZ");
  });
});
