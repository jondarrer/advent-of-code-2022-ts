import { SupplyStacks } from "./supply-stacks";

const part1 = ([
  { stacks, rearrangementProcedures },
]: Array<SupplyStacks>): string => {
  for (let i = 0; i < rearrangementProcedures.length; i++) {
    const [quantity, from, to] = rearrangementProcedures[i];
    stacks[to - 1].push(
      ...stacks[from - 1]
        .splice(stacks[from - 1].length - quantity, quantity)
        .reverse()
    );
  }

  return stacks.flatMap((stack) => stack[stack.length - 1]).join("");
};

export default part1;
