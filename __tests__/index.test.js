import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const fileJSON1 = getFixturePath('file1.json');
const fileJSON2 = getFixturePath('file2.json');
const result = fs.readFileSync(getFixturePath('expected'), 'utf-8');

test('genDiff', () => {
  expect(genDiff(fileJSON1, fileJSON2)).toEqual(result);
});
