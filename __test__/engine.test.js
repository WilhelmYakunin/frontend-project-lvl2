import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import genDiff from '../src/gendiff';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const read = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const fixturesFormates = ['json', 'ini', 'yml'];
const styles = ['json', 'plain', 'stylish'];

describe.each(fixturesFormates)('%s', (format) => {
  test(`${format} genDiff test`, () => {
    styles.forEach((style) => {
      const fileBefore = getFixturePath(`before.${format}`);
      const fileAfter = getFixturePath(`after.${format}`);
      const tested = genDiff(fileBefore, fileAfter, style);
      const expected = read(`result-${style}.txt`);
      expect(tested).toEqual(expected);
    });
  });
});
