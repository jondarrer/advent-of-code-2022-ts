import part1, { calculateScore } from "./part1";

describe("day2/part1", () => {
  it("should work out the total score provided in the strategy guide", () => {
    const input = [
      ["A", "Y"],
      ["B", "X"],
      ["C", "Z"],
    ];
    expect(part1(input)).toEqual(15);
  });
});

describe("day2/calculateScore", () => {
  it("should work out the score in a game of rock, paper, scissors for R-R", () => {
    expect(calculateScore("R", "R")).toEqual(1 + 3);
  });
  it("should work out the score in a game of rock, paper, scissors for R-P", () => {
    expect(calculateScore("R", "P")).toEqual(2 + 6);
  });
  it("should work out the score in a game of rock, paper, scissors for R-S", () => {
    expect(calculateScore("R", "S")).toEqual(3 + 0);
  });
  it("should work out the score in a game of rock, paper, scissors for P-R", () => {
    expect(calculateScore("P", "R")).toEqual(1 + 0);
  });
  it("should work out the score in a game of rock, paper, scissors for P-P", () => {
    expect(calculateScore("P", "P")).toEqual(2 + 3);
  });
  it("should work out the score in a game of rock, paper, scissors for P-S", () => {
    expect(calculateScore("P", "S")).toEqual(3 + 6);
  });
  it("should work out the score in a game of rock, paper, scissors for S-R", () => {
    expect(calculateScore("S", "R")).toEqual(1 + 6);
  });
  it("should work out the score in a game of rock, paper, scissors for S-P", () => {
    expect(calculateScore("S", "P")).toEqual(2 + 0);
  });
  it("should work out the score in a game of rock, paper, scissors for S-S", () => {
    expect(calculateScore("S", "S")).toEqual(3 + 3);
  });
});
