import { performOperation } from "./part1";
import { Command } from "./types";

const part2 = (input: Array<Command>): Array<string> => {
  const result: Array<string> = [];
  const screen: Array<Array<string>> = [];
  const registryHistory: Array<number> = [1];
  const SCREEN_WIDTH = 40;

  for (let i = 0; i < input.length; i++) {
    performOperation(input[i], registryHistory);
  }

  for (let i = 0; i < registryHistory.length - 1; i++) {
    const spriteHorizontalPosition = registryHistory[i];
    const x = i % SCREEN_WIDTH;
    const y = Math.floor(i / SCREEN_WIDTH);
    let pixelState = ".";
    if (
      x >= spriteHorizontalPosition - 1 &&
      x <= spriteHorizontalPosition + 1
    ) {
      pixelState = "#";
    }
    if (screen[y] === undefined) {
      screen[y] = [];
    }
    screen[y][x] = pixelState;
  }

  for (let i = 0; i < screen.length; i++) {
    result.push(screen[i].join(""));
  }

  return result;
};

export default part2;
