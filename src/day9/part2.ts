import { moveHeadOneStep, moveTail } from "./part1";
import { GridPosition, Move } from "./types";

const part2 = (input: Array<Move>): number => knotMotionSimulator(input, 10);

const knotMotionSimulator = (moves: Array<Move>, noOfKnots: number): number => {
  let knots: Array<GridPosition> = [];
  for (let i = 0; i < noOfKnots; i++) {
    knots[i] = { x: 0, y: 0 };
  }
  const headIndex = 0;
  const tailIndex = noOfKnots - 1;
  const tailPositions = new Set<string>();
  tailPositions.add(`${knots[tailIndex].x},${knots[tailIndex].y}`);

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];

    // Move the head one step at a time
    for (let j = 0; j < move.amount; j++) {
      knots[headIndex] = moveHeadOneStep(knots[headIndex], move);
      knots = moveKnots(knots);
      const serialisedTail = `${knots[tailIndex].x},${knots[tailIndex].y}`;
      if (!tailPositions.has(serialisedTail)) {
        tailPositions.add(serialisedTail);
      }
    }
  }

  return tailPositions.size;
};

const moveKnots = (knots: Array<GridPosition>): Array<GridPosition> => {
  const movedKnots: Array<GridPosition> = [knots[0]];

  for (let i = 1; i < knots.length; i++) {
    movedKnots[i] = moveTail(movedKnots[i - 1], knots[i]);
  }

  return movedKnots;
};

export default part2;
export { moveKnots };
