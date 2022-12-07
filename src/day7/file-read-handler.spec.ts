import fileReadHandler from "./file-read-handler";

describe("day7/file-read-handler", () => {
  it("should read in strings and convert them to commands and output", () => {
    const lines = [
      "$ cd /",
      "$ ls",
      "dir a",
      "14848514 b.txt",
      "8504156 c.dat",
      "dir d",
      "$ cd a",
      "$ ls",
      "dir e",
      "29116 f",
      "2557 g",
      "62596 h.lst",
      "$ cd e",
      "$ ls",
      "584 i",
      "$ cd ..",
      "$ cd ..",
      "$ cd d",
      "$ ls",
      "4060174 j",
      "8033020 d.log",
      "5626152 d.ext",
      "7214296 k",
    ];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual([
      { cmd: "cd", args: "/" },
      { cmd: "ls", args: "" },
      { type: "dir", name: "a", size: undefined },
      { type: "file", name: "b.txt", size: 14848514 },
      { type: "file", name: "c.dat", size: 8504156 },
      { type: "dir", name: "d", size: undefined },
      { cmd: "cd", args: "a" },
      { cmd: "ls", args: "" },
      { type: "dir", name: "e", size: undefined },
      { type: "file", name: "f", size: 29116 },
      { type: "file", name: "g", size: 2557 },
      { type: "file", name: "h.lst", size: 62596 },
      { cmd: "cd", args: "e" },
      { cmd: "ls", args: "" },
      { type: "file", name: "i", size: 584 },
      { cmd: "cd", args: ".." },
      { cmd: "cd", args: ".." },
      { cmd: "cd", args: "d" },
      { cmd: "ls", args: "" },
      { type: "file", name: "j", size: 4060174 },
      { type: "file", name: "d.log", size: 8033020 },
      { type: "file", name: "d.ext", size: 5626152 },
      { type: "file", name: "k", size: 7214296 },
    ]);
  });
});
