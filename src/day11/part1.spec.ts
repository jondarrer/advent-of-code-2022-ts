import part1, { somethingElse } from './part1';

describe('day11/part1', () => {
  it('should work out the result', () => {
    const input = [];
    expect(part1(input)).toEqual(0);
  });
});
describe('day11/somethingElse', () => {
  it('should work out something', () => {
    const input = 0;
    expect(somethingElse(input)).toEqual(0);
  });
});
