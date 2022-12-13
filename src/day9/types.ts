export type GridPosition = {
  x: number;
  y: number;
};

export enum Direction {
  Up = "U",
  Down = "D",
  Left = "L",
  Right = "R",
}

export type Move = {
  direction: Direction;
  amount: number;
};
