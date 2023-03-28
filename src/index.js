import read from './reader.js';
import parse from './parser.js';
import genDiff from './genDiff.js';

export default (filepath1, filepath2) => {
  const extension1 = filepath1.split('.').pop();
  const objectParsed1 = parse(read(filepath1), extension1);
  const extension2 = filepath2.split('.').pop();
  const objectParsed2 = parse(read(filepath2), extension2);
  const result = genDiff(objectParsed1, objectParsed2);
  return result;
};
