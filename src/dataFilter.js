import _ from 'lodash';

function dataFilter(filedata1, filedata2, differenceCollection) {
  const keysOfFile1 = Object.keys(filedata1);
  const keysOfFile2 = Object.keys(filedata2);
  const keys = _.union(keysOfFile1, keysOfFile2);

  keys.forEach((key) => {
    const value = filedata1[key];
    if (_.isObject(value) && _.isObject(filedata2[key])) {
      return dataFilter(value, filedata2[key], differenceCollection);
    }
    if (keysOfFile2.includes(key) && filedata2[key] === value) {
      differenceCollection.EQUAL.push({ key, value });
    }
    if (!keysOfFile1.includes(key)) {
      const valueAdded = filedata2[key];
      differenceCollection.ADDED.push({ key, valueAdded });
    }
    if ((keysOfFile1.includes(key) && keysOfFile2.includes(key)) && value !== filedata2[key]) {
      const modifiedValue = filedata2[key];
      differenceCollection.MODIFIED.push({ key, value, modifiedValue });
    }
    if (!keysOfFile2.includes(key)) {
      differenceCollection.DELETED.push({ key, value });
    }
  });
  return differenceCollection;
}

export default dataFilter;
