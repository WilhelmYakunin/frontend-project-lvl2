import fs from 'fs';
import * as path from 'path';
import diffTree from './diffTree.js';
import parse from './parse.js';
import render from './formaters/index.js';

export default function renderDiff(filePath1, filePath2, format = 'stylish') {
  const getFormat = (filePath) => path.extname(filePath).slice(1);
  const read = (filePath) => fs.readFileSync(filePath, 'utf-8');
  const filedata = (filePath) => parse(getFormat(filePath), read(filePath));
  const tree = diffTree(filedata(filePath1), filedata(filePath2));

  return render(tree, format);
}
