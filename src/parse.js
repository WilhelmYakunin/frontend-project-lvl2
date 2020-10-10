import _ from 'lodash';
import yaml from 'js-yaml';
import ini from 'ini';

const parseNumber = (object) => _.mapValues(object, (value) => (_.isPlainObject(value)
  ? parseNumber(value)
  : Number.parseFloat(value) || value));

export default function parse(filedata, format) {
  switch (format) {
    case 'yml':
      return yaml.safeLoad(filedata);
    case 'ini':
      return parseNumber(ini.parse(filedata));
    case 'json':
      return JSON.parse(filedata);
    default:
      throw new Error(`unknown format ${format}`);
  }
}
