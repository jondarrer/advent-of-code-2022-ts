import part2 from "./part2";
import { Command, Operation } from "./types";

describe("day10/part2", () => {
  it("should work out the result", () => {
    const input: Array<Command> = [
      { operation: Operation.AddX, value: 15 },
      { operation: Operation.AddX, value: -11 },
      { operation: Operation.AddX, value: 6 },
      { operation: Operation.AddX, value: -3 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: -8 },
      { operation: Operation.AddX, value: 13 },
      { operation: Operation.AddX, value: 4 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: -35 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 24 },
      { operation: Operation.AddX, value: -19 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 16 },
      { operation: Operation.AddX, value: -11 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 21 },
      { operation: Operation.AddX, value: -15 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -3 },
      { operation: Operation.AddX, value: 9 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: -3 },
      { operation: Operation.AddX, value: 8 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -36 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 7 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: 6 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 7 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -13 },
      { operation: Operation.AddX, value: 13 },
      { operation: Operation.AddX, value: 7 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: -33 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 8 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 17 },
      { operation: Operation.AddX, value: -9 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: -3 },
      { operation: Operation.AddX, value: 11 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -13 },
      { operation: Operation.AddX, value: -19 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 3 },
      { operation: Operation.AddX, value: 26 },
      { operation: Operation.AddX, value: -30 },
      { operation: Operation.AddX, value: 12 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 3 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -9 },
      { operation: Operation.AddX, value: 18 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 9 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: -37 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 3 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 15 },
      { operation: Operation.AddX, value: -21 },
      { operation: Operation.AddX, value: 22 },
      { operation: Operation.AddX, value: -6 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -10 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 20 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: -6 },
      { operation: Operation.AddX, value: -11 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
    ];
    expect(part2(input)).toEqual([
      "##..##..##..##..##..##..##..##..##..##..",
      "###...###...###...###...###...###...###.",
      "####....####....####....####....####....",
      "#####.....#####.....#####.....#####.....",
      "######......######......######......####",
      "#######.......#######.......#######.....",
    ]);
  });
});
