import { itemToPriority } from "./part1";

const part2 = (input: Array<Array<string>>): number => {
  let sumOfPriorities = 0;

  for (let i = 0; i < input.length; i = i + 3) {
    const rucksack1 = new Set(input[i]);
    const rucksack2 = new Set(input[i + 1]);
    const rucksack3 = new Set(input[i + 2]);

    for (const item of rucksack1) {
      if (rucksack2.has(item) && rucksack3.has(item)) {
        sumOfPriorities += itemToPriority(item);
        break;
      }
    }
  }

  return sumOfPriorities;
};

const somethingElse = (arg: number): number => 0;

export default part2;
export { somethingElse };
