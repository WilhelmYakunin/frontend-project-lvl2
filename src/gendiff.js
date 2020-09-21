import fs from 'fs';
import * as path from 'path';
import diffTree from './diffTree.js';
import parse from './parse.js';
import render from './render.js';

export default function renderDiff(filePath1, filePath2, format = 'stylish') {
  const extname = (filePath) => path.extname(filePath);
  const read = (filePath) => fs.readFileSync(filePath, 'utf-8');
  const filedata = (filePath) => parse(extname(filePath), read(filePath));
  const tree = diffTree(filedata(filePath1), filedata(filePath2));

  return render(tree, format);
}
