// https://stackabuse.com/reading-a-file-line-by-line-in-node-js/
import lineByLine from 'n-readlines';

const fileReader = <Type>(fileName: string, handler: Function): Array<Type> => {
  const result = [];
  const liner = new lineByLine(fileName);

  let line;
  while ((line = liner.next())) {
    handler(result, line.toString('ascii'));
  }

  return result;
};

export default fileReader;
