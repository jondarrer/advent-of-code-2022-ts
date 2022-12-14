import path from "path";
import fileReader from "./file-reader";

// day imports
import {
  fileReadHandler as day10FileReadHandler,
  part1 as day10part1,
  part2 as day10part2,
} from "./day10";
import {
  fileReadHandler as day9FileReadHandler,
  part1 as day9part1,
  part2 as day9part2,
} from "./day9";
import {
  fileReadHandler as day8FileReadHandler,
  part1 as day8part1,
  part2 as day8part2,
} from "./day8";
import {
  fileReadHandler as day7FileReadHandler,
  part1 as day7part1,
  part2 as day7part2,
} from "./day7";
import {
  fileReadHandler as day6FileReadHandler,
  part1 as day6part1,
  part2 as day6part2,
} from "./day6";
import {
  fileReadHandler as day5FileReadHandler,
  part1 as day5part1,
  part2 as day5part2,
} from "./day5";
import {
  fileReadHandler as day4FileReadHandler,
  part1 as day4part1,
  part2 as day4part2,
} from "./day4";
import {
  fileReadHandler as day3FileReadHandler,
  part1 as day3part1,
  part2 as day3part2,
} from "./day3";
import {
  fileReadHandler as day2FileReadHandler,
  part1 as day2part1,
  part2 as day2part2,
} from "./day2";
import {
  fileReadHandler as day1FileReadHandler,
  part1 as day1part1,
  part2 as day1part2,
} from "./day1";

const challenges = {
  // challenges by day
  "10": {
    fileReadHandler: day10FileReadHandler,
    "1": day10part1,
    "2": day10part2,
  },
  "9": {
    fileReadHandler: day9FileReadHandler,
    "1": day9part1,
    "2": day9part2,
  },
  "8": {
    fileReadHandler: day8FileReadHandler,
    "1": day8part1,
    "2": day8part2,
  },
  "1": {
    fileReadHandler: day1FileReadHandler,
    "1": day1part1,
    "2": day1part2,
  },
  "2": {
    fileReadHandler: day2FileReadHandler,
    "1": day2part1,
    "2": day2part2,
  },
  "3": {
    fileReadHandler: day3FileReadHandler,
    "1": day3part1,
    "2": day3part2,
  },
  "4": {
    fileReadHandler: day4FileReadHandler,
    "1": day4part1,
    "2": day4part2,
  },
  "5": {
    fileReadHandler: day5FileReadHandler,
    "1": day5part1,
    "2": day5part2,
  },
  "6": {
    fileReadHandler: day6FileReadHandler,
    "1": day6part1,
    "2": day6part2,
  },
  "7": {
    fileReadHandler: day7FileReadHandler,
    "1": day7part1,
    "2": day7part2,
  },
};

// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
if (process.argv.length !== 4) {
  console.error(
    'Please specify both the day and the part, e.g. "npm start -- 1 1" for day 1 part 1'
  );
}

const dayArg = process.argv[2];
const partArg = process.argv[3];
const days = Object.keys(challenges);
const parts = ["1", "2"];

if (!days.includes(dayArg)) {
  console.error(
    `Sorry, day ${dayArg} isn't available. Choose one from these: ${days.join(
      ", "
    )}`
  );
  process.exit(1); // https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
}

if (!parts.includes(partArg)) {
  console.error(
    `Sorry, part ${partArg} isn't available. Choose one from these: ${parts.join(
      ", "
    )}`
  );
  process.exit(1); // https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
}

const input = fileReader<number>(
  path.join(__dirname, `day${dayArg}/input.txt`),
  challenges[dayArg].fileReadHandler
);

console.time("Time");
console.log(
  `day ${dayArg}, part ${partArg} =`,
  challenges[dayArg][partArg](input)
);
console.timeEnd("Time");
