import part1, { oneRangeContainsTheOther } from "./part1";

describe("day4/part1", () => {
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
    expect(part1(input)).toEqual(2);
  });
});
describe("day4/oneRangeContainsTheOther", () => {
  it("should work out whether one range contains the other: 1", () => {
    expect(oneRangeContainsTheOther([2, 4], [6, 8])).toEqual(false);
  });
  it("should work out whether one range contains the other: 2", () => {
    expect(oneRangeContainsTheOther([2, 3], [4, 5])).toEqual(false);
  });
  it("should work out whether one range contains the other: 3", () => {
    expect(oneRangeContainsTheOther([5, 7], [7, 9])).toEqual(false);
  });
  it("should work out whether one range contains the other: 4", () => {
    expect(oneRangeContainsTheOther([2, 8], [3, 7])).toEqual(true);
  });
  it("should work out whether one range contains the other: 5", () => {
    expect(oneRangeContainsTheOther([6, 6], [4, 6])).toEqual(true);
  });
  it("should work out whether one range contains the other: 6", () => {
    expect(oneRangeContainsTheOther([2, 6], [4, 8])).toEqual(false);
  });
});
