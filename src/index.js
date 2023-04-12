import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import genDiff from './genDiff.js';

const getExtension = (filepath) => {
  const ext = path.extname(filepath).slice(1);
  return ext.toLowerCase();
};

const getData = (filepath) => {
  const getAbsolutePath = (fPath) => path.resolve(process.cwd(), fPath);
  const data = fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
  return data;
};

export default (filepath1, filepath2) => {
  const extension1 = getExtension(filepath1);
  const dataParsed1 = parse(getData(filepath1), extension1);
  const extension2 = getExtension(filepath2);
  const dataParsed2 = parse(getData(filepath2), extension2);
  return genDiff(dataParsed1, dataParsed2);
};
