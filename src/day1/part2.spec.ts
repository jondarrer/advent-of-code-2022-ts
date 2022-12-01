import part2 from "./part2";

describe("day1/part2", () => {
  it("should work out the most amount of calories being carried by the top 3 elfs", () => {
    const input = [
      1000,
      2000,
      3000,
      null,
      4000,
      null,
      5000,
      6000,
      null,
      7000,
      8000,
      9000,
      null,
      10000,
    ];
    expect(part2(input)).toEqual(45_000);
  });
});
