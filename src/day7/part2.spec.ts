import part2, { somethingElse } from "./part2";
import { CommandOrOutput, CommandType, FileType } from "./types";

describe("day7/part2", () => {
  it("should work out the result", () => {
    const input: Array<CommandOrOutput> = [
      { type: "cmd", cmd: CommandType.ChangeDir, args: "/" },
      { type: "cmd", cmd: CommandType.List, args: "" },
      {
        type: "output",
        fileType: FileType.Dir,
        name: "a",
        size: undefined,
      },
      {
        type: "output",
        fileType: FileType.File,
        name: "b.txt",
        size: 14848514,
      },
      {
        type: "output",
        fileType: FileType.File,
        name: "c.dat",
        size: 8504156,
      },
      {
        type: "output",
        fileType: FileType.Dir,
        name: "d",
        size: undefined,
      },
      { type: "cmd", cmd: CommandType.ChangeDir, args: "a" },
      { type: "cmd", cmd: CommandType.List, args: "" },
      {
        type: "output",
        fileType: FileType.Dir,
        name: "e",
        size: undefined,
      },
      {
        type: "output",
        fileType: FileType.File,
        name: "f",
        size: 29116,
      },
      {
        type: "output",
        fileType: FileType.File,
        name: "g",
        size: 2557,
      },
      {
        type: "output",
        fileType: FileType.File,
        name: "h.lst",
        size: 62596,
      },
      { type: "cmd", cmd: CommandType.ChangeDir, args: "e" },
      { type: "cmd", cmd: CommandType.List, args: "" },
      {
        type: "output",
        fileType: FileType.File,
        name: "i",
        size: 584,
      },
      { type: "cmd", cmd: CommandType.ChangeDir, args: ".." },
      { type: "cmd", cmd: CommandType.ChangeDir, args: ".." },
      { type: "cmd", cmd: CommandType.ChangeDir, args: "d" },
      { type: "cmd", cmd: CommandType.List, args: "" },
      {
        type: "output",
        fileType: FileType.File,
        name: "j",
        size: 4060174,
      },
      {
        type: "output",
        fileType: FileType.File,
        name: "d.log",
        size: 8033020,
      },
      {
        type: "output",
        fileType: FileType.File,
        name: "d.ext",
        size: 5626152,
      },
      {
        type: "output",
        fileType: FileType.File,
        name: "k",
        size: 7214296,
      },
    ];
    expect(part2(input)).toEqual(24933642);
  });
});
describe("day7/somethingElse", () => {
  it("should work out something", () => {
    const input = 0;
    expect(somethingElse(input)).toEqual(0);
  });
});
