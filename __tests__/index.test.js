import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe.each(['json', 'yaml'])('check gendiff for %s', (format) => {
  const file1 = getFixturePath(`file1.${format}`);
  const file2 = getFixturePath(`file2.${format}`);

  test.each(['stylish', 'plain', 'json'])('%s output', (outputFormat) => {
    const result = fs.readFileSync(getFixturePath(`${outputFormat}Result`), 'utf-8');
    expect(genDiff(file1, file2, outputFormat)).toEqual(result);
  });
});
