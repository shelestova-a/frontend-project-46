import fs from 'fs';
import path from 'path';

const read = (filepath) => {
  const pathAbsolute = path.resolve(filepath);
  const content = fs.readFileSync(pathAbsolute, 'utf-8');
  return content;
};

export default read;
