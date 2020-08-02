import _ from 'lodash';
import parser from './parser.js';
import dataFilter from './dataFilter.js';

function genDiff(file1, file2) {
  const filedata1 = parser(file1);
  const filedata2 = parser(file2);

  const differenceCollection = {
    DELETED: [],
    EQUAL: [],
    MODIFIED: [],
    ADDED: [],
  };

  return dataFilter(filedata1, filedata2, differenceCollection);
}

export default genDiff;
