import part1, { buildTree } from "./part1";

describe("day7/part1", () => {
  it("should work out the result", () => {
    const input = [
      { type: "cmd", cmd: "cd", args: "/" },
      { type: "cmd", cmd: "ls", args: "" },
      { type: "output", fileType: "dir", name: "a", size: undefined },
      { type: "output", fileType: "file", name: "b.txt", size: 14848514 },
      { type: "output", fileType: "file", name: "c.dat", size: 8504156 },
      { type: "output", fileType: "dir", name: "d", size: undefined },
      { type: "cmd", cmd: "cd", args: "a" },
      { type: "cmd", cmd: "ls", args: "" },
      { type: "output", fileType: "dir", name: "e", size: undefined },
      { type: "output", fileType: "file", name: "f", size: 29116 },
      { type: "output", fileType: "file", name: "g", size: 2557 },
      { type: "output", fileType: "file", name: "h.lst", size: 62596 },
      { type: "cmd", cmd: "cd", args: "e" },
      { type: "cmd", cmd: "ls", args: "" },
      { type: "output", fileType: "file", name: "i", size: 584 },
      { type: "cmd", cmd: "cd", args: ".." },
      { type: "cmd", cmd: "cd", args: ".." },
      { type: "cmd", cmd: "cd", args: "d" },
      { type: "cmd", cmd: "ls", args: "" },
      { type: "output", fileType: "file", name: "j", size: 4060174 },
      { type: "output", fileType: "file", name: "d.log", size: 8033020 },
      { type: "output", fileType: "file", name: "d.ext", size: 5626152 },
      { type: "output", fileType: "file", name: "k", size: 7214296 },
    ];
    expect(part1(input)).toEqual(95437);
  });
});
describe("day7/buildTree", () => {
  it("should build a tree based on commands and output", () => {
    const input = [
      { type: "cmd", cmd: "cd", args: "/" },
      { type: "cmd", cmd: "ls", args: "" },
      { type: "output", fileType: "dir", name: "a", size: undefined },
      { type: "output", fileType: "file", name: "b.txt", size: 14848514 },
      { type: "output", fileType: "file", name: "c.dat", size: 8504156 },
      { type: "output", fileType: "dir", name: "d", size: undefined },
      { type: "cmd", cmd: "cd", args: "a" },
      { type: "cmd", cmd: "ls", args: "" },
      { type: "output", fileType: "dir", name: "e", size: undefined },
      { type: "output", fileType: "file", name: "f", size: 29116 },
      { type: "output", fileType: "file", name: "g", size: 2557 },
      { type: "output", fileType: "file", name: "h.lst", size: 62596 },
      { type: "cmd", cmd: "cd", args: "e" },
      { type: "cmd", cmd: "ls", args: "" },
      { type: "output", fileType: "file", name: "i", size: 584 },
      { type: "cmd", cmd: "cd", args: ".." },
      { type: "cmd", cmd: "cd", args: ".." },
      { type: "cmd", cmd: "cd", args: "d" },
      { type: "cmd", cmd: "ls", args: "" },
      { type: "output", fileType: "file", name: "j", size: 4060174 },
      { type: "output", fileType: "file", name: "d.log", size: 8033020 },
      { type: "output", fileType: "file", name: "d.ext", size: 5626152 },
      { type: "output", fileType: "file", name: "k", size: 7214296 },
    ];
    expect(buildTree(input)).toEqual([
      { fileType: "dir", path: "/", size: undefined },
      { fileType: "dir", path: "/a", size: undefined },
      { fileType: "dir", path: "/a/e", size: undefined },
      { fileType: "file", path: "/a/e/i", size: 584 },
    ]);
  });
});
