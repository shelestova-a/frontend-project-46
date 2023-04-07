import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import getFormatted from '../src/formatter/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const fileNestedJSON1 = getFixturePath('file1.json');
const fileNestedJSON2 = getFixturePath('file2.json');

const fileNestedYAML1 = getFixturePath('file1.yaml');
const fileNestedYAML2 = getFixturePath('file2.yaml');

const resultStylish = fs.readFileSync(getFixturePath('expectedStylish'), 'utf-8');
const resultPlain = fs.readFileSync(getFixturePath('expectedPlain'), 'utf-8');
const resultJSON = fs.readFileSync(getFixturePath('expectedJSON'), 'utf-8');

const testDataStylish = [
  { file1: fileNestedJSON1, file2: fileNestedJSON2, expected: resultStylish },
  { file1: fileNestedYAML1, file2: fileNestedYAML2, expected: resultStylish },
];

test.each(testDataStylish)('check gendiff stylish output', ({ file1, file2, expected }) => {
  expect(getFormatted(file1, file2)).toEqual(expected);
});

const testDataPlain = [
  {
    file1: fileNestedJSON1, file2: fileNestedJSON2, format: 'plain', expected: resultPlain,
  },
  {
    file1: fileNestedYAML1, file2: fileNestedYAML2, format: 'plain', expected: resultPlain,
  },
];

test.each(testDataPlain)('check gendiff plain output', ({
  file1, file2, format, expected,
}) => {
  expect(getFormatted(file1, file2, format)).toEqual(expected);
});

const testDataJSON = [
  {
    file1: fileNestedJSON1, file2: fileNestedJSON2, format: 'json', expected: resultJSON,
  },
  {
    file1: fileNestedYAML1, file2: fileNestedYAML2, format: 'json', expected: resultJSON,
  },
];

test.each(testDataJSON)('check gendiff json output', ({
  file1, file2, format, expected,
}) => {
  expect(getFormatted(file1, file2, format)).toEqual(expected);
});
