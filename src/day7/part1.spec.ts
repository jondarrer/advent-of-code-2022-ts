import part1, {
  buildFileSystemCmdsAndOutput,
  changeDir,
  addToFileSystem,
  FileType,
} from "./part1";

describe("day7/part1", () => {
  it("should work out the result", () => {
    const input = [
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
    ];
    expect(part1(input)).toEqual(95437);
  });
});

describe("day7/buildFileSystemCmdsAndOutput", () => {
  it("should build a tree based on commands and output", () => {
    const input = [
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
    ];
    expect(buildFileSystemCmdsAndOutput(input)).toEqual(
      expect.arrayContaining([
        {
          type: FileType.Dir,
          path: "/",
          size: undefined,
        },
      ])
    );

    expect(buildFileSystemCmdsAndOutput(input)).toEqual(
      expect.arrayContaining(
        expect.objectContaining({
          type: FileType.Dir,
          path: "/a",
          size: undefined,
        })
      )
    );
    expect(buildFileSystemCmdsAndOutput(input)).toEqual(
      expect.arrayContaining(
        expect.objectContaining({
          type: FileType.Dir,
          path: "/a/e",
          size: undefined,
        })
      )
    );
    expect(buildFileSystemCmdsAndOutput(input)).toEqual(
      expect.arrayContaining(
        expect.objectContaining({
          type: FileType.Dir,
          path: "/a/e/i",
          size: 584,
        })
      )
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
      { type: "dir", path: "/", size: undefined },
    ]);
  });
  it("should add dir b to /a", () => {
    // Arrange
    const fileSystem = [];

    // Act
    addToFileSystem(FileType.Dir, "b", undefined, ["/", "a"], fileSystem);

    // Assert
    expect(fileSystem).toStrictEqual([
      { type: "dir", path: "/a/b", size: undefined },
    ]);
  });
  it("should add file c.dat to /a/b", () => {
    // Arrange
    const fileSystem = [{ type: FileType.Dir, path: "/a/b", size: undefined }];

    // Act
    addToFileSystem(FileType.File, "c.dat", 123, ["/", "a", "b"], fileSystem);

    // Assert
    expect(fileSystem).toStrictEqual([
      { type: "dir", path: "/a/b", size: undefined },
      { type: "file", path: "/a/b/c.dat", size: 123 },
    ]);
  });
});
