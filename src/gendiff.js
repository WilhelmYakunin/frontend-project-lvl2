import fs from 'fs';
import * as path from 'path';
import diffTree from './diffTree.js';
import parse from './parse.js';
import render from './formaters/index.js';

export default function renderDiff(filePath1, filePath2, outputFormat = 'stylish') {
  const getFormat = (filePath) => path.extname(filePath).slice(1);
  const read = (filePath) => fs.readFileSync(filePath, 'utf-8');

  const filesData = [filePath1, filePath2].map((filePath) => {
    const format = getFormat(filePath);
    const data = read(filePath);
    return parse(data, format);
  });

  const fileBefore = filesData[0];
  const fileAfter = filesData[1];

  const tree = diffTree(fileBefore, fileAfter);

  return render(tree, outputFormat);
}
