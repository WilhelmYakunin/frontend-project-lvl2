import _ from 'lodash';

export default function getDiffTree(oldObj, newObj) {
  const uniqueKeys = _.union(_.keys(oldObj).sort(), _.keys(newObj).sort());
  const diffTree = uniqueKeys.map((key) => {
    const oldValue = oldObj[key];
    const currentValue = newObj[key];
    if (!_.has(oldObj, key)) {
      return {
        type: 'added', key, value: currentValue,
      };
    }
    if (!_.has(newObj, key)) {
      return {
        type: 'removed', key, value: oldValue,
      };
    }
    if (_.isPlainObject(oldValue) && _.isPlainObject(currentValue)) {
      return {
        type: 'nested', key, value: getDiffTree(oldValue, currentValue),
      };
    }
    if (_.isEqual(currentValue, oldValue)) {
      return {
        type: 'equal', key, value: currentValue,
      };
    }
    return {
      type: 'updated', key, value: currentValue, oldValue,
    };
  });
  return diffTree;
}
