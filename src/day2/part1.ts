const part1 = (input: Array<Array<string>>): number => {
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
      switch (response) {
        case "X":
          responseInRPS = "R";
          break;
        case "Y":
          responseInRPS = "P";
          break;
        default:
          responseInRPS = "S";
      }
      return calculateScore(opponentInRPS, responseInRPS);
    })
    .reduce((prev, curr) => prev + curr, 0);
};

const calculateScore = (a: string, b: string): number => {
  let score;

  switch (b) {
    case "R":
      score = 1;
      break;
    case "P":
      score = 2;
      break;
    default:
      score = 3;
      break;
  }
  if (a === b) {
    score += 3;
  }
  if (
    (a === "R" && b === "P") ||
    (a === "P" && b === "S") ||
    (a === "S" && b === "R")
  ) {
    score += 6;
  }

  return score;
};

export default part1;
export { calculateScore };
