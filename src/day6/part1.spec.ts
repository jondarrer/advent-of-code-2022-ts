import part1, { positionOfFirstRepeatedChar } from "./part1";

describe("day6/part1", () => {
  it("should work out the start-of-packet marker to be 7", () => {
    const input = ["mjqjpqmgbljsphdztnvjfqwrcgsmlb"];
    expect(part1(input)).toEqual(7);
  });
  it("should work out the start-of-packet marker to be 5", () => {
    const input = ["bvwbjplbgvbhsrlpgdmjqwftvncz"];
    expect(part1(input)).toEqual(5);
  });
  it("should work out the start-of-packet marker to be 6", () => {
    const input = ["nppdvjthqldpwncqszvftbrmjlhg"];
    expect(part1(input)).toEqual(6);
  });
  it("should work out the start-of-packet marker to be 10", () => {
    const input = ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"];
    expect(part1(input)).toEqual(10);
  });
  it("should work out the start-of-packet marker to be 11", () => {
    const input = ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"];
    expect(part1(input)).toEqual(11);
  });
});
describe("day6/positionOfFirstRepeatedChar", () => {
  it("should work out position of repeat to be 2", () => {
    const input = "qfzz";
    expect(positionOfFirstRepeatedChar(input)).toEqual(2);
  });
  it("should work out position of repeat to be 1", () => {
    const input = "mjqj";
    expect(positionOfFirstRepeatedChar(input)).toEqual(1);
  });
  it("should work out position of repeat to be 0", () => {
    const input = "fzfw";
    expect(positionOfFirstRepeatedChar(input)).toEqual(0);
  });
  it("should work out position of repeat to be -1", () => {
    const input = "jpqm";
    expect(positionOfFirstRepeatedChar(input)).toEqual(-1);
  });
});
