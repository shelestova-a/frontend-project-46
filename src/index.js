import fs from 'fs';

import path from 'path';

import yaml from 'js-yaml';

const getParsedObject = (filepath) => {
  const pathAbsolute = path.resolve(filepath);
  const content = fs.readFileSync(pathAbsolute, 'utf-8');
  const exten = filepath.split('.').pop();
  let objectParsed;
  if (exten.toLowerCase() === 'json') {
    objectParsed = JSON.parse(content);
  } else if ((exten.toLowerCase() === 'yaml') || (exten.toLowerCase() === 'yml')) {
    objectParsed = yaml.load(content);
  }
  return objectParsed;
};

export default getParsedObject;
