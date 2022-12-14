import part1, { moveHeadOneStep, moveTail } from "./part1";
import { Direction, GridPosition, Move } from "./types";

describe("day9/part1", () => {
  it("should work out the result", () => {
    const input = [
      { direction: Direction.Right, amount: 4 } as Move,
      { direction: Direction.Up, amount: 4 } as Move,
      { direction: Direction.Left, amount: 3 } as Move,
      { direction: Direction.Down, amount: 1 } as Move,
      { direction: Direction.Right, amount: 4 } as Move,
      { direction: Direction.Down, amount: 1 } as Move,
      { direction: Direction.Left, amount: 5 } as Move,
      { direction: Direction.Right, amount: 2 } as Move,
    ];
    expect(part1(input)).toEqual(13);
  });
});

describe("day9/moveHeadOneStep", () => {
  it("should move one step from {0, 0} to {0, 1}", () => {
    // Arrange
    const head: GridPosition = { x: 0, y: 0 };
    const move: Move = { direction: Direction.Up, amount: 1 };

    // Act & Assert
    expect(moveHeadOneStep(head, move)).toEqual({ x: 0, y: 1 });
  });
  it("should move one step from {0, 0} to {0, -1}", () => {
    // Arrange
    const head: GridPosition = { x: 0, y: 0 };
    const move: Move = { direction: Direction.Down, amount: 1 };

    // Act & Assert
    expect(moveHeadOneStep(head, move)).toEqual({ x: 0, y: -1 });
  });
  it("should move one step from {0, 0} to {1, 0}", () => {
    // Arrange
    const head: GridPosition = { x: 0, y: 0 };
    const move: Move = { direction: Direction.Right, amount: 1 };

    // Act & Assert
    expect(moveHeadOneStep(head, move)).toEqual({ x: 1, y: 0 });
  });
  it("should move one step from {0, 0} to {-1, 0}", () => {
    // Arrange
    const head: GridPosition = { x: 0, y: 0 };
    const move: Move = { direction: Direction.Left, amount: 1 };

    // Act & Assert
    expect(moveHeadOneStep(head, move)).toEqual({ x: -1, y: 0 });
  });
});

describe("day9/moveTail", () => {
  it("should move the tail in a straight line along x axis", () => {
    // Arrange
    const head: GridPosition = { x: 2, y: 0 };
    const tail: GridPosition = { x: 0, y: 0 };

    // Act & Assert
    expect(moveTail(head, tail)).toEqual({ x: 1, y: 0 });
  });
  it("should move the tail in a straight line along y axis", () => {
    // Arrange
    const head: GridPosition = { x: 0, y: 2 };
    const tail: GridPosition = { x: 0, y: 0 };

    // Act & Assert
    expect(moveTail(head, tail)).toEqual({ x: 0, y: 1 });
  });
  it("should move the tail diagonally down and to the left", () => {
    // Arrange
    const head: GridPosition = { x: -1, y: -1 };
    const tail: GridPosition = { x: 1, y: 1 };

    // Act & Assert
    expect(moveTail(head, tail)).toEqual({ x: 0, y: 0 });
  });
  it("should move the tail diagonally down and to the right", () => {
    // Arrange
    const head: GridPosition = { x: 3, y: -1 };
    const tail: GridPosition = { x: 1, y: 1 };

    // Act & Assert
    expect(moveTail(head, tail)).toEqual({ x: 2, y: 0 });
  });
  it("should move the tail diagonally up and to the right", () => {
    // Arrange
    const head: GridPosition = { x: 1, y: 1 };
    const tail: GridPosition = { x: -1, y: -1 };

    // Act & Assert
    expect(moveTail(head, tail)).toEqual({ x: 0, y: 0 });
  });
  it("should move the tail diagonally up and to the left", () => {
    // Arrange
    const head: GridPosition = { x: 1, y: -3 };
    const tail: GridPosition = { x: -1, y: -1 };

    // Act & Assert
    expect(moveTail(head, tail)).toEqual({ x: 0, y: -2 });
  });
  it("should move the tail diagonally", () => {
    // Arrange
    const head: GridPosition = { x: -1, y: -2 };
    const tail: GridPosition = { x: 0, y: 0 };

    // Act & Assert
    expect(moveTail(head, tail)).toEqual({ x: -1, y: -1 });
  });
  it("should move the tail in a straight line right", () => {
    // Arrange
    const head: GridPosition = { x: 4, y: 0 };
    const tail: GridPosition = { x: 2, y: 0 };

    // Act & Assert
    expect(moveTail(head, tail)).toEqual({ x: 3, y: 0 });
  });
  it("should move the tail in a straight line right", () => {
    // Arrange
    const head: GridPosition = { x: 4, y: 2 };
    const tail: GridPosition = { x: 3, y: 0 };

    // Act & Assert
    expect(moveTail(head, tail)).toEqual({ x: 4, y: 1 });
  });
});
