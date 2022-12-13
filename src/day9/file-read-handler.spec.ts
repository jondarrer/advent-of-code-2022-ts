import fileReadHandler from "./file-read-handler";
import { Move, Direction } from "./types";

describe("day9/file-read-handler", () => {
  it("should read in strings and convert them to moves", () => {
    const lines = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];
    const accumulator: Array<Move> = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      { direction: Direction.Right, amount: 4 } as Move,
      { direction: Direction.Up, amount: 4 } as Move,
      { direction: Direction.Left, amount: 3 } as Move,
      { direction: Direction.Down, amount: 1 } as Move,
      { direction: Direction.Right, amount: 4 } as Move,
      { direction: Direction.Down, amount: 1 } as Move,
      { direction: Direction.Left, amount: 5 } as Move,
      { direction: Direction.Right, amount: 2 } as Move,
    ]);
  });
});
