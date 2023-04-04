import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const fileNestedJSON1 = getFixturePath('file1Nested.json');
const fileNestedJSON2 = getFixturePath('file2Nested.json');

const fileNestedYAML1 = getFixturePath('file1Nested.yaml');
const fileNestedYAML2 = getFixturePath('file2Nested.yaml');

const resultNested = fs.readFileSync(getFixturePath('expectedNested'), 'utf-8');

const testData = [
  { file1: fileNestedJSON1, file2: fileNestedJSON2, expected: resultNested },
  { file1: fileNestedYAML1, file2: fileNestedYAML2, expected: resultNested },
];

test.each(testData)('genDiff', ({ file1, file2, expected }) => {
  expect(genDiff(file1, file2)).toEqual(expected);
});
