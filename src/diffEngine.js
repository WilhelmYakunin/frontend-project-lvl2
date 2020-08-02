import parser from './parser.js';

function genDiff(filepath1, filepath2) {
  const filedata1 = parser(filepath1);
  const filedata2 = parser(filepath2);

  const keysOfFile1 = Object.keys(filedata1);
  const keysOfFile2 = Object.keys(filedata2);

  const differenceCollection = {
    EQUAL: [],
    NOTEQUAL: [],
    MODIFIED: [],
    DELETED: [],
    ADDED: [],
  };

  keysOfFile1.forEach((key) => {
    const value = filedata1[key];
    if (filedata2[key] === value) {
      differenceCollection.EQUAL.push({ key, value });
    }
    if ((keysOfFile2.includes(key)) && (filedata2[key] !== value)) {
      differenceCollection.NOTEQUAL.push({ key, value });
    }
    if (!keysOfFile2.includes(key)) {
      differenceCollection.DELETED.push({ key, value });
    }
  });

  keysOfFile2.forEach((key) => {
    const value = filedata2[key];
    if (!keysOfFile1.includes(key)) {
      differenceCollection.ADDED.push({ key, value });
    }
    if ((keysOfFile1.includes(key)) && (filedata1[key] !== value)) {
      differenceCollection.MODIFIED.push({ key, value });
    }
  });

  return differenceCollection;
}

export default genDiff;
