export type Command = {
  operation: Operation;
  value?: number;
};

export enum Operation {
  AddX = "addx",
  Noop = "noop",
}
