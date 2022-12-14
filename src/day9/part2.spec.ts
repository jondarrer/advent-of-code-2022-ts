import part2, { moveTails } from "./part2";
import { Direction, GridPosition, Move } from "./types";

describe("day9/part2", () => {
  it("should work out the result small", () => {
    const input: Array<Move> = [
      { direction: Direction.Right, amount: 4 },
      { direction: Direction.Up, amount: 4 },
      { direction: Direction.Left, amount: 3 },
      { direction: Direction.Down, amount: 1 },
      { direction: Direction.Right, amount: 4 },
      { direction: Direction.Down, amount: 1 },
      { direction: Direction.Left, amount: 5 },
      { direction: Direction.Right, amount: 2 },
    ];
    expect(part2(input)).toEqual(1);
  });

  it("should work out the result large", () => {
    const input: Array<Move> = [
      { direction: Direction.Right, amount: 5 },
      { direction: Direction.Up, amount: 8 },
      { direction: Direction.Left, amount: 8 },
      { direction: Direction.Down, amount: 3 },
      { direction: Direction.Right, amount: 17 },
      { direction: Direction.Down, amount: 10 },
      { direction: Direction.Left, amount: 25 },
      { direction: Direction.Up, amount: 20 },
    ];
    expect(part2(input)).toEqual(36);
  });
});
describe.skip("day9/moveTails", () => {
  it("should work out something", () => {
    const knots: Array<GridPosition> = [];
    expect(moveTails(knots)).toEqual([]);
  });
});
