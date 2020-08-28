import _ from 'lodash';

export default function genDiffTree(oldObj, newObj) {
  const uniqueKeys = _.union(_.keys(oldObj), _.keys(newObj));

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
}
