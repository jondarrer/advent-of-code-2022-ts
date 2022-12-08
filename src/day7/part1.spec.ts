import part1, {
  buildFileSystemCmdsAndOutput,
  changeDir,
  addToFileSystem,
  calculateDirSizes,
} from "./part1";
import {
  Command,
  CommandOrOutput,
  CommandType,
  FileSystemItem,
  FileType,
  Output,
} from "./types";

describe("day7/part1", () => {
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
    expect(part1(input)).toEqual(95437);
  });
});

describe("day7/buildFileSystemCmdsAndOutput", () => {
  it("should build a tree based on commands and output", () => {
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
    expect(buildFileSystemCmdsAndOutput(input)).toEqual(
      expect.arrayContaining([
        {
          fileType: FileType.Dir,
          path: "/",
          size: undefined,
        },
        {
          fileType: FileType.Dir,
          path: "/a",
          size: undefined,
        },
        {
          fileType: FileType.Dir,
          path: "/a/e",
          size: undefined,
        },
        {
          fileType: FileType.File,
          path: "/a/e/i",
          size: 584,
        },
        {
          fileType: FileType.File,
          path: "/a/f",
          size: 29116,
        },
        {
          fileType: FileType.File,
          path: "/a/g",
          size: 2557,
        },
        {
          fileType: FileType.File,
          path: "/a/h.lst",
          size: 62596,
        },
        {
          fileType: FileType.File,
          path: "/b.txt",
          size: 14848514,
        },
        {
          fileType: FileType.File,
          path: "/c.dat",
          size: 8504156,
        },
        {
          fileType: FileType.Dir,
          path: "/d",
          size: undefined,
        },
        {
          fileType: FileType.File,
          path: "/d/j",
          size: 4060174,
        },
        {
          fileType: FileType.File,
          path: "/d/d.log",
          size: 8033020,
        },
        {
          fileType: FileType.File,
          path: "/d/d.ext",
          size: 5626152,
        },
        {
          fileType: FileType.File,
          path: "/d/k",
          size: 7214296,
        },
      ])
    );
  });
});

describe("day7/changeDir", () => {
  it("should change to /a/b from /a", () => {
    // Arrange
    const dirPath = ["/", "a"];

    // Act
    changeDir("b", dirPath);

    // Assert
    expect(dirPath).toStrictEqual(["/", "a", "b"]);
  });
  it("should change to / from /a/b", () => {
    // Arrange
    const dirPath = ["/", "a", "b"];

    // Act
    changeDir("/", dirPath);

    // Assert
    expect(dirPath).toStrictEqual(["/"]);
  });
  it("should change to / from /a/b", () => {
    // Arrange
    const dirPath = ["/", "a", "b"];

    // Act
    changeDir("..", dirPath);

    // Assert
    expect(dirPath).toStrictEqual(["/", "a"]);
  });
});

describe("day7/addToFileSystem", () => {
  it("should add dir / to (empty)", () => {
    // Arrange
    const fileSystem = [];

    // Act
    addToFileSystem(FileType.Dir, "/", undefined, [], fileSystem);

    // Assert
    expect(fileSystem).toStrictEqual([
      { fileType: FileType.Dir, path: "/", size: undefined },
    ]);
  });
  it("should add dir b to /a", () => {
    // Arrange
    const fileSystem = [];

    // Act
    addToFileSystem(FileType.Dir, "b", undefined, ["/", "a"], fileSystem);

    // Assert
    expect(fileSystem).toStrictEqual([
      { fileType: FileType.Dir, path: "/a/b", size: undefined },
    ]);
  });
  it("should add file c.dat to /a/b", () => {
    // Arrange
    const fileSystem = [
      { fileType: FileType.Dir, path: "/a/b", size: undefined },
    ];

    // Act
    addToFileSystem(FileType.File, "c.dat", 123, ["/", "a", "b"], fileSystem);

    // Assert
    expect(fileSystem).toStrictEqual([
      { fileType: FileType.Dir, path: "/a/b", size: undefined },
      { fileType: FileType.File, path: "/a/b/c.dat", size: 123 },
    ]);
  });
});

describe("day7/calculateDirSizes", () => {
  it("should calculate directory sizes inline", () => {
    // Arrange
    const fileSystem: Array<FileSystemItem> = [
      {
        fileType: FileType.Dir,
        path: "/",
        size: undefined,
      },
      {
        fileType: FileType.Dir,
        path: "/a",
        size: undefined,
      },
      {
        fileType: FileType.Dir,
        path: "/a/e",
        size: undefined,
      },
      {
        fileType: FileType.File,
        path: "/a/e/i",
        size: 584,
      },
      {
        fileType: FileType.File,
        path: "/a/f",
        size: 29116,
      },
      {
        fileType: FileType.File,
        path: "/a/g",
        size: 2557,
      },
      {
        fileType: FileType.File,
        path: "/a/h.lst",
        size: 62596,
      },
      {
        fileType: FileType.File,
        path: "/b.txt",
        size: 14848514,
      },
      {
        fileType: FileType.File,
        path: "/c.dat",
        size: 8504156,
      },
      {
        fileType: FileType.Dir,
        path: "/d",
        size: undefined,
      },
      {
        fileType: FileType.File,
        path: "/d/j",
        size: 4060174,
      },
      {
        fileType: FileType.File,
        path: "/d/d.log",
        size: 8033020,
      },
      {
        fileType: FileType.File,
        path: "/d/d.ext",
        size: 5626152,
      },
      {
        fileType: FileType.File,
        path: "/d/k",
        size: 7214296,
      },
    ];

    // Act
    const dirSizes = calculateDirSizes(fileSystem);

    // Assert
    // expect(fileSystem).toEqual(
    //   expect.arrayContaining([
    //     {
    //       fileType: FileType.Dir,
    //       path: "/",
    //       size: 48381165,
    //     },
    //     {
    //       fileType: FileType.Dir,
    //       path: "/a",
    //       size: 94853,
    //     },
    //     {
    //       fileType: FileType.Dir,
    //       path: "/a/e",
    //       size: 584,
    //     },
    //     {
    //       fileType: FileType.File,
    //       path: "/a/e/i",
    //       size: 584,
    //     },
    //     {
    //       fileType: FileType.File,
    //       path: "/a/f",
    //       size: 29116,
    //     },
    //     {
    //       fileType: FileType.File,
    //       path: "/a/g",
    //       size: 2557,
    //     },
    //     {
    //       fileType: FileType.File,
    //       path: "/a/h.lst",
    //       size: 62596,
    //     },
    //     {
    //       fileType: FileType.File,
    //       path: "/b.txt",
    //       size: 14848514,
    //     },
    //     {
    //       fileType: FileType.File,
    //       path: "/c.dat",
    //       size: 8504156,
    //     },
    //     {
    //       fileType: FileType.Dir,
    //       path: "/d",
    //       size: 24933642,
    //     },
    //     {
    //       fileType: FileType.File,
    //       path: "/d/j",
    //       size: 4060174,
    //     },
    //     {
    //       fileType: FileType.File,
    //       path: "/d/d.log",
    //       size: 8033020,
    //     },
    //     {
    //       fileType: FileType.File,
    //       path: "/d/d.ext",
    //       size: 5626152,
    //     },
    //     {
    //       fileType: FileType.File,
    //       path: "/d/k",
    //       size: 7214296,
    //     },
    //   ])
    // );
    const expected = new Map<string, number>([]);
    expected.set("/a", 94853);
    expected.set("/a/e", 584);
    expected.set("/d", 24933642);
    expected.set("/", 48381165);
    expect(dirSizes).toEqual(expected);
  });
});
