import part1 from "./part1";

describe("day1/part1", () => {
  it("should work out the most amount of calories being carried by any elf", () => {
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
    expect(part1(input)).toEqual(24_000);
  });
});
