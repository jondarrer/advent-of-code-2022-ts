import part1, { isTreeVisible } from "./part1";

describe("day8/part1", () => {
  it("should work out the result", () => {
    const input = [
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
      [3, 3, 5, 4, 9],
      [3, 5, 3, 9, 0],
    ];
    expect(part1(input)).toEqual(21);
  });
});
describe("day8/isTreeVisible", () => {
  it("should work out whether a given tree is visible 5, {[0], [5, 1, 2], [5, 3, 5], [2]} = true", () => {
    expect(
      isTreeVisible(5, {
        top: [0],
        right: [5, 1, 2],
        bottom: [5, 3, 5],
        left: [2],
      })
    ).toBeTruthy();
  });
  it("should work out whether a given tree is visible 5, {[3], [1, 2], [3, 5, 3], [2, 5]} = true", () => {
    expect(
      isTreeVisible(5, {
        top: [3],
        right: [1, 2],
        bottom: [3, 5, 3],
        left: [2, 5],
      })
    ).toBeTruthy();
  });
  it("should work out whether a given tree is visible 1, {[7], [2], [3, 4, 9], [2, 5, 5]} = false", () => {
    expect(
      isTreeVisible(1, {
        top: [7],
        right: [2],
        bottom: [3, 4, 9],
        left: [2, 5, 5],
      })
    ).toBeFalsy();
  });
  it("should work out whether a given tree is visible 5, {[0, 5], [3, 3, 2], [3, 5], [6]} = true", () => {
    expect(
      isTreeVisible(5, {
        top: [0, 5],
        right: [3, 3, 2],
        bottom: [3, 5],
        left: [6],
      })
    ).toBeTruthy();
  });
  it("should work out whether a given tree is visible 3, {[3, 5], [3, 2], [5, 3], [6, 5]} = false", () => {
    expect(
      isTreeVisible(3, {
        top: [3, 5],
        right: [3, 2],
        bottom: [5, 3],
        left: [6, 5],
      })
    ).toBeFalsy();
  });
  it("should work out whether a given tree is visible 3, {[7, 1], [2], [4, 9], [6, 5, 3]} = true", () => {
    expect(
      isTreeVisible(3, {
        top: [7, 1],
        right: [2],
        bottom: [4, 9],
        left: [6, 5, 3],
      })
    ).toBeTruthy();
  });
  it("should work out whether a given tree is visible 3, {[0, 5, 5], [5, 4, 9], [5], [3]} = false", () => {
    expect(
      isTreeVisible(3, {
        top: [0, 5, 5],
        right: [5, 4, 9],
        bottom: [5],
        left: [3],
      })
    ).toBeFalsy();
  });
  it("should work out whether a given tree is visible 5, {[3, 5, 3], [4, 9], [3], [3, 3]} = true", () => {
    expect(
      isTreeVisible(5, {
        top: [3, 5, 3],
        right: [4, 9],
        bottom: [3],
        left: [3, 3],
      })
    ).toBeTruthy();
  });
  it("should work out whether a given tree is visible 4, {[7, 1, 3], [9], [9], [3, 3, 5]} = false", () => {
    expect(
      isTreeVisible(4, {
        top: [7, 1, 3],
        right: [9],
        bottom: [9],
        left: [3, 3, 5],
      })
    ).toBeFalsy();
  });
});
