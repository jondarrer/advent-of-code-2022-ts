import part2, { calculateResponseInRPS } from "./part2";

describe("day2/part2", () => {
  it("should work out the total score provided in the strategy guide", () => {
    const input = [
      ["A", "Y"],
      ["B", "X"],
      ["C", "Z"],
    ];
    expect(part2(input)).toEqual(12);
  });
});

describe("day2/calculateResponseInRPS", () => {
  it("should work out the response in a game of rock, paper, scissors for R-X", () => {
    expect(calculateResponseInRPS("R", "X")).toEqual("S");
  });
  it("should work out the score in a game of rock, paper, scissors for R-Y", () => {
    expect(calculateResponseInRPS("R", "Y")).toEqual("R");
  });
  it("should work out the score in a game of rock, paper, scissors for R-Z", () => {
    expect(calculateResponseInRPS("R", "Z")).toEqual("P");
  });
  it("should work out the score in a game of rock, paper, scissors for P-X", () => {
    expect(calculateResponseInRPS("P", "X")).toEqual("R");
  });
  it("should work out the score in a game of rock, paper, scissors for P-Y", () => {
    expect(calculateResponseInRPS("P", "Y")).toEqual("P");
  });
  it("should work out the score in a game of rock, paper, scissors for P-Z", () => {
    expect(calculateResponseInRPS("P", "Z")).toEqual("S");
  });
  it("should work out the score in a game of rock, paper, scissors for S-X", () => {
    expect(calculateResponseInRPS("S", "X")).toEqual("P");
  });
  it("should work out the score in a game of rock, paper, scissors for S-Y", () => {
    expect(calculateResponseInRPS("S", "Y")).toEqual("S");
  });
  it("should work out the score in a game of rock, paper, scissors for S-Z", () => {
    expect(calculateResponseInRPS("S", "Z")).toEqual("R");
  });
});
