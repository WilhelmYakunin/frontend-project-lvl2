import _ from 'lodash';

export default function genDiffTree(oldObj, newObj) {
  const uniqueKeys = _.union(_.keys(oldObj), _.keys(newObj));
  const diffTree = uniqueKeys.map((key) => {
    const oldValue = oldObj[key];
    const newValue = newObj[key];
    if (!_.has(oldObj, key)) {
      return {
        type: 'added', key, value: newValue,
      };
    }
    if (!_.has(newObj, key)) {
      return {
        type: 'removed', key, value: oldValue,
      };
    }
    if ((_.isObject(oldValue) && _.isObject(newValue)) && !_.isEqual(newValue, oldValue)) {
      return {
        type: 'object', key, value: genDiffTree(oldValue, newValue),
      };
    }
    return _.isEqual(newValue, oldValue) ? {
      type: 'equal', key, value: newValue,
    } : {
      type: 'updated', key, oldValue, newValue,
    };
  });
  return diffTree;
}
