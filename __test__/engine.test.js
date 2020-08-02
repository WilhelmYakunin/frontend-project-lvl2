import genDiff from '../src/diffEngine';
import expectedEngineValue from '../__fixtures__/expectedEngineValue.js';
import getParsed from '../src/parser.js';
import expectedObj from '../__fixtures__/expectedDataInitial.js';

const getFixturePath = (file) => `./__fixtures__/${file}`;

test('genDiff engine test', () => {
  expect(genDiff(getFixturePath('before.json'), getFixturePath('after.json'))).toEqual(expectedEngineValue());
  expect(genDiff(getFixturePath('before.yml'), getFixturePath('after.yml'))).toEqual(expectedEngineValue());
  expect(genDiff(getFixturePath('before.ini'), getFixturePath('after.ini'))).toEqual(expectedEngineValue());
});

test('parsers test', () => {
  expect(getParsed(getFixturePath('before.json'))).toEqual(expectedObj());
  expect(getParsed(getFixturePath('before.yml'))).toEqual(expectedObj());
  expect(getParsed(getFixturePath('before.ini'))).toEqual(expectedObj());
  expect(getParsed(getFixturePath('before.txt'))).toEqual('Sorry, unknown format ;((');
});
