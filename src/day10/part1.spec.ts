import part1, { calculateSignalStrength, performOperation } from "./part1";
import { Command, Operation } from "./types";

describe("day10/part1", () => {
  it("should work out the result", () => {
    const input: Array<Command> = [
      { operation: Operation.AddX, value: 15 },
      { operation: Operation.AddX, value: -11 },
      { operation: Operation.AddX, value: 6 },
      { operation: Operation.AddX, value: -3 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: -8 },
      { operation: Operation.AddX, value: 13 },
      { operation: Operation.AddX, value: 4 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: -35 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 24 },
      { operation: Operation.AddX, value: -19 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 16 },
      { operation: Operation.AddX, value: -11 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 21 },
      { operation: Operation.AddX, value: -15 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -3 },
      { operation: Operation.AddX, value: 9 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: -3 },
      { operation: Operation.AddX, value: 8 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 5 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -36 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 7 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: 6 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 7 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -13 },
      { operation: Operation.AddX, value: 13 },
      { operation: Operation.AddX, value: 7 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: -33 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 8 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 17 },
      { operation: Operation.AddX, value: -9 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: -3 },
      { operation: Operation.AddX, value: 11 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -13 },
      { operation: Operation.AddX, value: -19 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 3 },
      { operation: Operation.AddX, value: 26 },
      { operation: Operation.AddX, value: -30 },
      { operation: Operation.AddX, value: 12 },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 3 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -9 },
      { operation: Operation.AddX, value: 18 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 9 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -1 },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: -37 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 3 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 15 },
      { operation: Operation.AddX, value: -21 },
      { operation: Operation.AddX, value: 22 },
      { operation: Operation.AddX, value: -6 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: -10 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.AddX, value: 20 },
      { operation: Operation.AddX, value: 1 },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: 2 },
      { operation: Operation.AddX, value: -6 },
      { operation: Operation.AddX, value: -11 },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
      { operation: Operation.Noop },
    ];
    expect(part1(input)).toEqual(13140);
  });
});

describe("day10/performOperation", () => {
  it("should perform a noop", () => {
    // Arrange
    const registryHistory: Array<number> = [1, 2, 3];

    // Act
    performOperation({ operation: Operation.Noop }, registryHistory);

    // Assert
    expect(registryHistory).toEqual([1, 2, 3, 3]);
  });
  it("should perform a addx", () => {
    // Arrange
    const registryHistory: Array<number> = [1, 2, 3, 3];

    // Act
    performOperation({ operation: Operation.AddX, value: 4 }, registryHistory);

    // Assert
    expect(registryHistory).toEqual([1, 2, 3, 3, 3, 7]);
  });
});

describe("day10/calculateSignalStrength", () => {
  it("should work out the signal strength for a particular cycle (20), based on the registry", () => {
    const cycleNo = 20;
    const registryHistory: Array<number> = [1];
    registryHistory[cycleNo - 1] = 21;
    expect(calculateSignalStrength(cycleNo, registryHistory)).toEqual(420);
  });
  it("should work out the signal strength for a particular cycle (20), based on the registry", () => {
    const cycleNo = 60;
    const registryHistory: Array<number> = [1];
    registryHistory[cycleNo - 1] = 19;
    expect(calculateSignalStrength(cycleNo, registryHistory)).toEqual(1140);
  });
  it("should work out the signal strength for a particular cycle (20), based on the registry", () => {
    const cycleNo = 100;
    const registryHistory: Array<number> = [1];
    registryHistory[cycleNo - 1] = 18;
    expect(calculateSignalStrength(cycleNo, registryHistory)).toEqual(1800);
  });
  it("should work out the signal strength for a particular cycle (20), based on the registry", () => {
    const cycleNo = 140;
    const registryHistory: Array<number> = [1];
    registryHistory[cycleNo - 1] = 21;
    expect(calculateSignalStrength(cycleNo, registryHistory)).toEqual(2940);
  });
  it("should work out the signal strength for a particular cycle (20), based on the registry", () => {
    const cycleNo = 180;
    const registryHistory: Array<number> = [1];
    registryHistory[cycleNo - 1] = 16;
    expect(calculateSignalStrength(cycleNo, registryHistory)).toEqual(2880);
  });
  it("should work out the signal strength for a particular cycle (20), based on the registry", () => {
    const cycleNo = 220;
    const registryHistory: Array<number> = [1];
    registryHistory[cycleNo - 1] = 18;
    expect(calculateSignalStrength(cycleNo, registryHistory)).toEqual(3960);
  });
});
