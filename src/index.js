import fs from 'fs';

import path from 'path';

import getParsedObject from './parser.js';

const getParsedData = (filepath) => {
  const pathAbsolute = path.resolve(filepath);
  const content = fs.readFileSync(pathAbsolute, 'utf-8');
  const exten = filepath.split('.').pop();
  return getParsedObject(content, exten);
};

export default getParsedData;
