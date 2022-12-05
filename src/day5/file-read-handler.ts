import { SupplyStacks } from "./supply-stacks";

const rearrangementProcedureRegex = /move (\d+) from (\d+) to (\d+)/;

const fileReadHandler = (
  accumulator: Array<SupplyStacks>,
  line: string
): void => {
  let supplyStacks: SupplyStacks;

  if (accumulator[0] === undefined) {
    supplyStacks = new SupplyStacks();
    accumulator.push(supplyStacks);
  } else {
    supplyStacks = accumulator[0];
  }

  if (line.indexOf("[") > -1) {
    const row = [];
    for (let i = 0; i < line.length; i = i + 4) {
      row.push(line.charAt(i + 1));
    }
    for (let i = 0; i < row.length; i++) {
      if (supplyStacks.stacks[i] === undefined) {
        supplyStacks.stacks[i] = [];
      }
      if (row[i] !== " ") {
        supplyStacks.stacks[i].unshift(row[i]);
      }
    }
  }
  if (line.match(rearrangementProcedureRegex)) {
    const res = rearrangementProcedureRegex.exec(line);
    supplyStacks.rearrangementProcedures.push([
      parseInt(res[1]),
      parseInt(res[2]),
      parseInt(res[3]),
    ]);
  }
};

export default fileReadHandler;

export {};
