import {
  CommandOrOutput,
  CommandType,
  FileSystemItem,
  FileType,
} from "./types";

const part1 = (input: Array<CommandOrOutput>): number => {
  const fileSystem = buildFileSystemCmdsAndOutput(input);
  const dirSizes = calculateDirSizes(fileSystem);
  let totalSize = 0;

  for (let size of dirSizes.values()) {
    if (size <= 100_000) {
      totalSize += size;
    }
  }

  return totalSize;
};

const buildFileSystemCmdsAndOutput = (
  cmdsAndOutput: Array<CommandOrOutput>
): Array<FileSystemItem> => {
  const currentDirPath: Array<string> = [];
  const fileSystem: Array<FileSystemItem> = [
    { fileType: FileType.Dir, path: "/", size: undefined },
  ];
  for (let i = 0; i < cmdsAndOutput.length; i++) {
    const cmdOrOutput = cmdsAndOutput[i];
    switch (cmdOrOutput.type) {
      case "cmd":
        if (cmdOrOutput.cmd === CommandType.ChangeDir) {
          changeDir(cmdOrOutput.args, currentDirPath);
        }
        break;
      case "output":
        addToFileSystem(
          cmdOrOutput.fileType,
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
  fileType: FileType,
  name: string,
  size: number,
  currentDirPath: Array<string>,
  fileSystem: Array<FileSystemItem>
) => {
  fileSystem.push({
    fileType,
    path: `${
      currentDirPath.length === 0
        ? ""
        : currentDirPath.join("/").substring(1) + "/"
    }${name}`,
    size,
  });
};

const calculateDirSizes = (
  fileSystem: Array<FileSystemItem>
): Map<string, number> => {
  const dirSizes = new Map<string, number>();

  for (let i = 0; i < fileSystem.length; i++) {
    const fileSystemItem = fileSystem[i];
    if (fileSystemItem.fileType === FileType.File) {
      const parentDirPaths = getParentDirPaths(
        fileSystemItem.path.substring(0, fileSystemItem.path.lastIndexOf("/"))
      );

      for (let j = 0; j < parentDirPaths.length; j++) {
        const dirPath = parentDirPaths[j];
        if (!dirSizes.has(dirPath)) {
          dirSizes.set(dirPath, 0);
        }
        const previousSize = dirSizes.get(dirPath);
        dirSizes.set(dirPath, (previousSize || 0) + fileSystemItem.size);
      }
    }
  }

  return dirSizes;
};

const getParentDirPaths = (path: string): Array<string> => {
  const parentDirPaths: Array<string> = [];
  let parts: Array<string>;

  if (path === "/") {
    parts = [""];
  } else {
    parts = path.split("/");
  }

  let currentPath = [];
  for (let i = 0; i < parts.length; i++) {
    currentPath.push(parts[i]);
    parentDirPaths.push(`${currentPath.join("/")}`);
  }

  return parentDirPaths;
};

export default part1;
export {
  buildFileSystemCmdsAndOutput,
  changeDir,
  addToFileSystem,
  calculateDirSizes,
};
