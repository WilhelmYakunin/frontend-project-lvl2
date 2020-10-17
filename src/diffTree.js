import _ from 'lodash';

export default function getDiffTree(firstObj, secondObj) {
  const uniqueKeys = _.union(_.keys(firstObj), _.keys(secondObj)).sort();
  return uniqueKeys.map((key) => {
    const valueBefore = firstObj[key];
    const valueAfter = secondObj[key];
    if (!_.has(firstObj, key)) {
      return { type: 'added', key, value: valueAfter };
    }
    if (!_.has(secondObj, key)) {
      return { type: 'removed', key, value: valueBefore };
    }
    if (_.isPlainObject(valueBefore) && _.isPlainObject(valueAfter)) {
      return { type: 'nested', key, value: getDiffTree(valueBefore, valueAfter) };
    }
    if (_.isEqual(valueAfter, valueBefore)) {
      return { type: 'equal', key, value: valueAfter };
    }
    return {
      type: 'updated', key, value: valueAfter, valueBefore,
    };
  });
}
