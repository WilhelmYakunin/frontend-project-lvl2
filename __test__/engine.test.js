import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import genDiff from '../src/gendiff';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const read = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe.each([
  ['json', 'json', 'result-json'],
  ['json', 'plain', 'result-plain'],
  ['json', 'stylish', 'result-stylish'],
  ['ini', 'json', 'result-json'],
  ['ini', 'plain', 'result-plain'],
  ['ini', 'stylish', 'result-stylish'],
  ['yml', 'json', 'result-json'],
  ['yml', 'plain', 'result-plain'],
  ['yml', 'stylish', 'result-stylish'],
])('%s', (ext, format, result) => {
  test(`${format} genDiff test`, () => {
    expect(genDiff(getFixturePath(`before.${ext}`), getFixturePath(`after.${ext}`), format)).toEqual(read(result));
  });
});
