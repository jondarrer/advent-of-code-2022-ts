import { Command, Operation } from "./types";

const part1 = (input: Array<Command>): number => {
  let result: number = 0;
  const registryHistory: Array<number> = [1];
  const cyclesToReportOn: Array<number> = [20, 60, 100, 140, 180, 220];

  for (let i = 0; i < input.length; i++) {
    performOperation(input[i], registryHistory);
  }

  for (let i = 0; i < cyclesToReportOn.length; i++) {
    const strength = calculateSignalStrength(
      cyclesToReportOn[i],
      registryHistory
    );
    result = result + strength;
  }

  return result;
};

const performOperation = (
  command: Command,
  registryHistory: Array<number>
): void => {
  switch (command.operation) {
    case Operation.Noop:
      registryHistory[registryHistory.length] =
        registryHistory[registryHistory.length - 1];
      break;
    default:
      registryHistory[registryHistory.length] =
        registryHistory[registryHistory.length - 1];
      registryHistory[registryHistory.length] =
        registryHistory[registryHistory.length - 1] + command.value;
      break;
  }
};

const calculateSignalStrength = (
  cycleNo: number,
  registryHistory: Array<number>
): number => registryHistory[cycleNo - 1] * cycleNo;

export default part1;
export { calculateSignalStrength, performOperation };
