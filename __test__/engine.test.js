import * as path from 'path';
import genDiff from '../src/diffEngine';
import expectedComplexJson from '../__fixtures__/expectedDataComplex.js';
import getParsed from '../src/parser.js';
import expectedObj from '../__fixtures__/expectedDataInitial.js';
import expectedComplexObj from '../__fixtures__/expectedEngineComplexValue.js';
import getStylish from '../src/stylish.js';
import stylishExpected from '../__fixtures__/excpectedStylish.js';
import plain from '../src/plain.js';
import plainExpected from '../__fixtures__/plainExpected.js';

const baseFolder = '../frontend-project-lvl2/__fixtures__/';
const getPath = (name) => path.resolve(baseFolder, name);

test('genDiff engine test', () => {
  expect(genDiff(getParsed(getPath('before.json')), getParsed(getPath('after.json')))).toEqual(expectedComplexObj());
});

test('output styles test', () => {
  expect(getStylish(genDiff(getParsed(getPath('before.json')), getParsed(getPath('after.json'))))).toEqual(stylishExpected());
  expect(plain(genDiff(getParsed(getPath('before.json')), getParsed(getPath('after.json'))))).toEqual(plainExpected());
  expect(JSON.stringify(genDiff(getParsed(getPath('before.json')), getParsed(getPath('after.json'))), null, 4)).toEqual(JSON.stringify(expectedComplexObj(), null, 4));
});

test('parser test', () => {
  expect(getParsed(getPath('before.json'))).toEqual(expectedComplexJson());
  expect(getParsed(getPath('before.yml'))).toEqual(expectedObj());
  expect(getParsed(getPath('before.ini'))).toEqual(expectedObj());
  expect(getParsed(getPath('before.txt'))).toEqual('Sorry, unknown file format ;((');
});
