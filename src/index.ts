import path from "path";
import fileReader from "./file-reader";

// day imports
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

// challenges by day
const challenges = {
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
