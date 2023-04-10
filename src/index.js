import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import genDiff from './genDiff.js';

const read = (filepath) => {
  const getAbsolutePath = (fPath) => path.resolve(process.cwd(), fPath);
  const content = fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
  return content;
};

export default (filepath1, filepath2) => {
  const extension1 = path.extname(filepath1).slice(1).toLowerCase();
  const objectParsed1 = parse(read(filepath1), extension1);
  const extension2 = path.extname(filepath2).slice(1).toLowerCase();
  const objectParsed2 = parse(read(filepath2), extension2);
  const result = genDiff(objectParsed1, objectParsed2);
  return result;
};
