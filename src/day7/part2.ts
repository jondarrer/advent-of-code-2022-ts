import { buildFileSystemCmdsAndOutput, calculateDirSizes } from "./part1";
import { CommandOrOutput } from "./types";

const part2 = (input: Array<CommandOrOutput>): number => {
  const fileSystem = buildFileSystemCmdsAndOutput(input);
  const dirSizes = calculateDirSizes(fileSystem);
  let remainingSpace: number, minSpaceToFreeUp: number;

  remainingSpace = 70_000_000 - dirSizes.get(""); // Still have a bug wrt root folder name
  minSpaceToFreeUp = 30_000_000 - remainingSpace;

  const sortedDirsBySize = new Map(
    [...dirSizes.entries()].sort((a, b) => a[1] - b[1])
  );

  for (let size of sortedDirsBySize.values()) {
    if (size >= minSpaceToFreeUp) {
      return size;
    }
  }

  throw new Error("Not found!");
};

const somethingElse = (arg: number): number => 0;

export default part2;
export { somethingElse };
