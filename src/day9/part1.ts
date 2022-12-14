import { Direction, GridPosition, Move } from "./types";

const part1 = (input: Array<Move>): number => {
  let head: GridPosition = { x: 0, y: 0 };
  let tail: GridPosition = { x: 0, y: 0 };
  const tailPositions = new Set<string>();
  tailPositions.add(`${tail.x},${tail.y}`);

  for (let i = 0; i < input.length; i++) {
    const move = input[i];
    for (let j = 0; j < move.amount; j++) {
      head = moveHeadOneStep(head, move);
      if (isHeadMoreThanOneStepFromTheTail(head, tail)) {
        tail = moveTail(head, tail);
        const serialisedTail = `${tail.x},${tail.y}`;
        if (!tailPositions.has(serialisedTail)) {
          tailPositions.add(serialisedTail);
        }
      }
    }
  }

  return tailPositions.size;
};

const moveHeadOneStep = (head: GridPosition, move: Move): GridPosition => {
  switch (move.direction) {
    case Direction.Up:
      return { x: head.x, y: head.y + 1 };
    case Direction.Down:
      return { x: head.x, y: head.y - 1 };
    case Direction.Left:
      return { x: head.x - 1, y: head.y };
    default:
      return { x: head.x + 1, y: head.y };
  }
};

const moveTail = (head: GridPosition, tail: GridPosition): GridPosition => {
  if (
    (Math.abs(head.x - tail.x) > 1 && Math.abs(head.y - tail.y) > 0) ||
    (Math.abs(head.x - tail.x) > 0 && Math.abs(head.y - tail.y) > 1)
  ) {
    // Move diagonally (either top left, top right, bottom left or bottom right!!)
    if (head.x < tail.x && head.y < tail.y)
      return { x: tail.x - 1, y: tail.y - 1 };
    else if (head.x < tail.x && head.y > tail.y)
      return { x: tail.x - 1, y: tail.y + 1 };
    else if (head.x > tail.x && head.y < tail.y)
      return { x: tail.x + 1, y: tail.y - 1 };
    else return { x: tail.x + 1, y: tail.y + 1 };
  } else if (Math.abs(head.x - tail.x) > 1) {
    // Move along x (either left or right)
    if (head.x < tail.x) return { x: tail.x - 1, y: tail.y };
    else return { x: tail.x + 1, y: tail.y };
  } else if (Math.abs(head.y - tail.y) > 1) {
    // Move along y (either down or up)
    if (head.y < tail.y) return { x: tail.x, y: tail.y - 1 };
    else return { x: tail.x, y: tail.y + 1 };
  } else {
    throw new Error(
      `Unexpected! head: ${head.x}, ${head.y} tail: ${tail.x}, ${tail.y}`
    );
  }
};

const isHeadMoreThanOneStepFromTheTail = (
  head: GridPosition,
  tail: GridPosition
): boolean => Math.abs(head.x - tail.x) > 1 || Math.abs(head.y - tail.y) > 1;

export default part1;
export { moveHeadOneStep, moveTail, isHeadMoreThanOneStepFromTheTail };
