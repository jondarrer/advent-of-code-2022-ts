import part2, { oneRangeOverlapsTheOther } from "./part2";

describe("day4/part2", () => {
  it("should work out the result", () => {
    const input = [
      [
        [2, 4],
        [6, 8],
      ],
      [
        [2, 3],
        [4, 5],
      ],
      [
        [5, 7],
        [7, 9],
      ],
      [
        [2, 8],
        [3, 7],
      ],
      [
        [6, 6],
        [4, 6],
      ],
      [
        [2, 6],
        [4, 8],
      ],
    ];
    expect(part2(input)).toEqual(4);
  });
});
describe("day4/oneRangeOverlapsTheOther", () => {
  it("should work out whether one range overlaps the other: 1", () => {
    expect(oneRangeOverlapsTheOther([2, 4], [6, 8])).toEqual(false);
  });
  it("should work out whether one range overlaps the other: 2", () => {
    expect(oneRangeOverlapsTheOther([2, 3], [4, 5])).toEqual(false);
  });
  it("should work out whether one range overlaps the other: 3", () => {
    expect(oneRangeOverlapsTheOther([5, 7], [7, 9])).toEqual(true);
  });
  it("should work out whether one range overlaps the other: 4", () => {
    expect(oneRangeOverlapsTheOther([2, 8], [3, 7])).toEqual(true);
  });
  it("should work out whether one range overlaps the other: 5", () => {
    expect(oneRangeOverlapsTheOther([6, 6], [4, 6])).toEqual(true);
  });
  it("should work out whether one range overlaps the other: 6", () => {
    expect(oneRangeOverlapsTheOther([2, 6], [4, 8])).toEqual(true);
  });
});
