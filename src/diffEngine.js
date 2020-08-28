import _ from 'lodash';

const genDiffTree = (oldObj, newObj) => {
  const keysOfFile1 = _.keys(oldObj);
  const keysOfFile2 = _.keys(newObj);
  const uniqueKeys = _.union(keysOfFile1, keysOfFile2);

  const diffTree = uniqueKeys.map((key) => {
    const oldValue = oldObj[key];
    const newValue = newObj[key];

    if (!_.has(oldObj, key)) {
      return {
        state: 'added', marker: '+', key, value: newValue,
      };
    }
    if (!_.has(newObj, key)) {
      return {
        state: 'removed', marker: '-', key, value: oldValue,
      };
    }
    if ((_.isObject(oldValue) && _.isObject(newValue)) && !_.isEqual(newValue, oldValue)) {
      return {
        state: 'object', marker: ' ', key, value: genDiffTree(oldValue, newValue),
      };
    }
    return _.isEqual(newValue, oldValue) ? {
      state: 'equal', marker: ' ', key, value: newValue,
    } : {
      state: 'updated', marker: ' ', key, value: { oldValue, newValue },
    };
  });

  return diffTree;
};

export default genDiffTree;
