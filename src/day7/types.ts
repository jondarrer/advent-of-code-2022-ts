export enum CommandType {
  ChangeDir = "cd",
  List = "ls",
}

export type Command = {
  type: "cmd";
  cmd: CommandType;
  args: string;
};

export type Output = {
  type: "output";
  fileType: FileType;
  name: string;
  size: number;
};

export type CommandOrOutput = Command | Output;

export enum FileType {
  Dir = "dir",
  File = "file",
}

export type FileSystemItem = {
  fileType: FileType;
  path: string;
  size: number;
};
