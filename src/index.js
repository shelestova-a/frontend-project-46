import path from 'path';
import read from './reader.js';
import parse from './parsers.js';
import genDiff from './genDiff.js';
import makeStylish from './formatter/stylish.js';

export default (filepath1, filepath2, formatter = 'stylish') => {
  const extension1 = path.extname(filepath1);
  const objectParsed1 = parse(read(filepath1), extension1);
  const extension2 = path.extname(filepath2);
  const objectParsed2 = parse(read(filepath2), extension2);
  const result = genDiff(objectParsed1, objectParsed2);
  if (formatter === 'stylish') {
    return makeStylish(result);
  }
  return result;
};
