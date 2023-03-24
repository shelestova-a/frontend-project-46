import fs from 'fs';

import path from 'path';

const getParsedObject = (filepath) => {
  const pathAbsolute = path.resolve(filepath);
  const content = fs.readFileSync(pathAbsolute, 'utf-8');
  const objectParsed = JSON.parse(content);
  return objectParsed;
};

export default getParsedObject;
