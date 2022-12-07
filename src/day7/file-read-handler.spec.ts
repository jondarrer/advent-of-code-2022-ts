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
    ]);
  });
});
