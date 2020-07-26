const fs = require('fs');
const path = require('path');
import { strict as assert } from 'assert';

import genDiff from '../src/diffEngine';

test('genDiff', () => {
  const getFixturePath = (file) => `${__dirname}/../__fixtures__/${file}`;
  const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

  const file1 = getFixturePath('before.json');
  const file2 = getFixturePath('after.json');

  const expected = readFile('rightAnswer.txt');

  assert.notDeepStrictEqual(genDiff(file1, file2), expected);
});