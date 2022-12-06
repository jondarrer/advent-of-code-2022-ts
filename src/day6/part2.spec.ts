import part2 from "./part2";

describe("day6/part2", () => {
  it("should work out the start-of-message marker to be 19", () => {
    const input = ["mjqjpqmgbljsphdztnvjfqwrcgsmlb"];
    expect(part2(input)).toEqual(19);
  });
  it("should work out the start-of-message marker to be 23", () => {
    const input = ["bvwbjplbgvbhsrlpgdmjqwftvncz"];
    expect(part2(input)).toEqual(23);
  });
  it("should work out the start-of-message marker to be 23", () => {
    const input = ["nppdvjthqldpwncqszvftbrmjlhg"];
    expect(part2(input)).toEqual(23);
  });
  it("should work out the start-of-message marker to be 29", () => {
    const input = ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"];
    expect(part2(input)).toEqual(29);
  });
  it("should work out the start-of-message marker to be 26", () => {
    const input = ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"];
    expect(part2(input)).toEqual(26);
  });
});
