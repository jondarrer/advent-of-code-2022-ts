import { calculateScore } from "./part1";

const part2 = (input: Array<Array<string>>): number => {
  return input
    .map(([opponent, response]) => {
      // Convert suggested response
      let opponentInRPS, responseInRPS;
      switch (opponent) {
        case "A":
          opponentInRPS = "R";
          break;
        case "B":
          opponentInRPS = "P";
          break;
        default:
          opponentInRPS = "S";
      }
      responseInRPS = calculateResponseInRPS(opponentInRPS, response);
      return calculateScore(opponentInRPS, responseInRPS);
    })
    .reduce((prev, curr) => prev + curr, 0);
};

const calculateResponseInRPS = (a: string, b: string): string => {
  if (b === "Y") return a;
  if (b === "X") {
    switch (a) {
      case "R":
        return "S";
      case "P":
        return "R";
      default:
        return "P";
    }
  }
  switch (a) {
    case "R":
      return "P";
    case "P":
      return "S";
    default:
      return "R";
  }
};

export default part2;
export { calculateResponseInRPS };
