import fileReader from './';
import { next } from 'n-readlines';

describe('file-reader', () => {
  it('should read a test and call the handler as expected', () => {
    next
      .mockReturnValueOnce('one')
      .mockReturnValueOnce('two')
      .mockReturnValueOnce('three')
      .mockReturnValueOnce(false);
    const simpleHandler = (accumulator: Array<String>, line: String) => {
      accumulator.push(line);
    };
    expect(fileReader<String>('./test.txt', simpleHandler)).toEqual([
      'one',
      'two',
      'three',
    ]);
  });
});
