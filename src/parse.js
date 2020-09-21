import _ from 'lodash';
import yaml from 'js-yaml';
import ini from 'ini';

const parseNumber = (object) => _.mapValues(object, (value) => (_.isObject(value)
  ? parseNumber(value)
  : Number.parseFloat(value) || value));

export default function parse(extname, filedata) {
  let parseFunction;

  if (extname === '.json') {
    parseFunction = JSON.parse(filedata);
  }
  if (extname === '.yml') {
    parseFunction = yaml.safeLoad(filedata);
  }
  if (extname === '.ini') {
    parseFunction = parseNumber(ini.parse(filedata));
  }
  return parseFunction;
}
