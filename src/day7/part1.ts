const part1 = (input: Array<object>): number => 0;

export enum FileType {
  Dir = "dir",
  File = "file",
}

export type FileSystemItem = {
  type: FileType;
  path: string;
  size: number;
};

const buildFileSystemCmdsAndOutput = (
  cmdsAndOutput: Array<any>
): Array<FileSystemItem> => {
  const currentDirPath: Array<string> = [];
  const fileSystem: Array<FileSystemItem> = [];
  for (let i = 0; i < cmdsAndOutput.length; i++) {
    const cmdOrOutput = cmdsAndOutput[i];
    switch (cmdOrOutput.hasOwnProperty("cmd") ? cmdOrOutput.cmd : "output") {
      case "cd":
        changeDir(cmdOrOutput.args, currentDirPath);
        break;
      case "ls":
        break;
      default:
        addToFileSystem(
          cmdOrOutput.type,
          cmdOrOutput.name,
          cmdOrOutput.size,
          currentDirPath,
          fileSystem
        );
    }
  }

  return fileSystem;
};

const changeDir = (dirName, currentDirPath: Array<string>) => {
  switch (dirName) {
    case "..":
      currentDirPath.pop();
      break;
    case "/":
      if (currentDirPath.length === 0) {
        currentDirPath.push("/");
      }
      currentDirPath.splice(1, currentDirPath.length - 1);
      break;
    default:
      currentDirPath.push(dirName);
  }

  return changeDir;
};

const addToFileSystem = (
  type: FileType,
  name: string,
  size: number,
  currentDirPath: Array<string>,
  fileSystem: Array<FileSystemItem>
) => {
  fileSystem.push({
    type,
    path: `${
      currentDirPath.length === 0
        ? ""
        : currentDirPath.join("/").substring(1) + "/"
    }${name}`,
    size,
  });
};

export default part1;
export { buildFileSystemCmdsAndOutput, changeDir, addToFileSystem };
