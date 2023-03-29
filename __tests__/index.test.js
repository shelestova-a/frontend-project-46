import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const fileJSON1 = getFixturePath('file1.json');
const fileJSON2 = getFixturePath('file2.json');

const fileYAML1 = getFixturePath('file1.yaml');
const fileYAML2 = getFixturePath('file2.yaml');

const result = fs.readFileSync(getFixturePath('expected'), 'utf-8');

const testData = [
  { file1: fileJSON1, file2: fileJSON2, expected: result },
  { file1: fileYAML1, file2: fileYAML2, expected: result },
];

test.each(testData)('genDiff', ({ file1, file2, expected }) => {
  expect(genDiff(file1, file2)).toEqual(expected);
});
