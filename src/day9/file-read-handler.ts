import { Move, Direction } from "./types";

const fileReadHandler = (accumulator: Array<Move>, line: string): void => {
  const [rawDirection, rawAmount] = line.split(" ");
  accumulator.push({
    direction: parseDirection(rawDirection),
    amount: parseInt(rawAmount),
  } as Move);
};

const parseDirection = (direction: string): Direction => {
  switch (direction) {
    case "U":
      return Direction.Up;
    case "D":
      return Direction.Down;
    case "L":
      return Direction.Left;
    case "R":
      return Direction.Right;
    default:
      throw new Error(
        `Unexpected direction ${direction}. Must be one of 'U', 'D', 'L', 'R'.`
      );
  }
};

export default fileReadHandler;
