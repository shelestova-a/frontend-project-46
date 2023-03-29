import fs from 'fs';
import path from 'path';

const read = (filepath) => {
  const getAbsolutePath = (fPath) => path.resolve(process.cwd(), fPath);
  const content = fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
  return content;
};

export default read;
