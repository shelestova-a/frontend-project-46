import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import genDiff from './genDiff.js';
import getFormatted from './formatter/index.js';

const getData = (filepath) => {
  const getAbsolutePath = (fPath) => path.resolve(process.cwd(), fPath);
  const extension = path.extname(filepath).slice(1).toLowerCase();
  const data = fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
  return { data, extension };
};

export default (filepath1, filepath2, format = 'stylish') => {
  const dataParsed1 = parse(getData(filepath1).data, getData(filepath1).extension);
  const dataParsed2 = parse(getData(filepath2).data, getData(filepath2).extension);
  const diffTree = genDiff(dataParsed1, dataParsed2);
  return getFormatted(diffTree, format);
};
