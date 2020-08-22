import fs from 'fs';
import * as path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

function getParsed(filePath) {
  const extention = path.extname(filePath);
  const fileData = fs.readFileSync(filePath, 'utf-8');

  if (extention === '.json') {
    return JSON.parse(fileData);
  }
  if (extention === '.yml') {
    return yaml.safeLoad(fileData);
  }
  if (extention === '.ini') {
    return ini.parse(fileData);
  }
  return 'Sorry, unknown format ;((';
}

export default getParsed;
