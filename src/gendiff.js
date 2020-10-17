import fs from 'fs';
import * as path from 'path';
import getDiffTree from './diffTree.js';
import parse from './parse.js';
import render from './formaters/index.js';

export default function renderDiff(filePath1, filePath2, outputFormat = 'stylish') {
  const getFormat = (filePath) => path.extname(filePath).slice(1);
  const read = (filePath) => fs.readFileSync(filePath, 'utf-8');

  const getFileData = (filePath) => {
    const format = getFormat(filePath);
    const data = read(filePath);
    return parse(data, format);
  };

  const fileBefore = getFileData(filePath1);
  const fileAfter = getFileData(filePath2);

  const tree = getDiffTree(fileBefore, fileAfter);

  return render(tree, outputFormat);
}
