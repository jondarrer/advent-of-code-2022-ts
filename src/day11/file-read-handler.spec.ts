import fileReadHandler from './file-read-handler';

describe('day11/file-read-handler', () => {
  it('should read in strings and convert them to numbers', () => {
    const lines = ['1721', '979', '366', '299', '675', '1456'];
    const accumulator = [];
    lines.forEach((line) => {
      fileReadHandler(accumulator, line);
    });
    expect(accumulator).toEqual(['1721', '979', '366', '299', '675', '1456']);
  });
});
