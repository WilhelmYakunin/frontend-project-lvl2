import * as path from 'path';
import genDiff from '../src/diffEngine';
import expectedComplexJson from '../__fixtures__/expectedDataComplex.js';
import getParsed from '../src/parser.js';
import expectedObj from '../__fixtures__/expectedDataInitial.js';
import expectedComplexObj from '../__fixtures__/expectedEngineComplexValue.js';

const baseFolder = '../frontend-project-lvl2/__fixtures__/';
const getPath = (name) => path.resolve(baseFolder, name);

test('genDiff engine test', () => {
  expect(genDiff(getParsed(getPath('before.json')), getParsed(getPath('after.json')))).toEqual(expectedComplexObj());
});

test('parsers test', () => {
  expect(getParsed(getPath('before.json'))).toEqual(expectedComplexJson());
  expect(getParsed(getPath('before.yml'))).toEqual(expectedObj());
  expect(getParsed(getPath('before.ini'))).toEqual(expectedObj());
  expect(getParsed(getPath('before.txt'))).toEqual('Sorry, unknown format ;((');
});
