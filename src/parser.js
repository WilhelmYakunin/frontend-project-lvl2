import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

function getParsed(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf-8');

  if (path.extname(filePath) === '.json') {
    return JSON.parse(fileData);
  }
  if (path.extname(filePath) === '.yml') {
    return yaml.safeLoad(fileData);
  }
  return 'Sorry, unknown format ;((';
}

export default getParsed;
