import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

function getParsed(filePath) {
  const format = path.extname(filePath);
  const fileData = fs.readFileSync(filePath, 'utf-8');

  if (format === '.json') {
    return JSON.parse(fileData);
  }
  if (format === '.yml') {
    return yaml.safeLoad(fileData);
  }
  if (format === '.ini') {
    return ini.parse(fileData);
  }
  return 'Sorry, unknown format ;((';
}

export default getParsed;
