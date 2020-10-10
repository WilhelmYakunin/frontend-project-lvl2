import _ from 'lodash';

const setTokenInfo = (typeIfno, keyInfo, stateInfo, oldStateInfo) => ({
  type: typeIfno,
  key: keyInfo,
  state: stateInfo,
  oldState: oldStateInfo,
});

export default function getDiffTree(oldObj, newObj) {
  const uniqueKeys = _.union(_.keys(oldObj), _.keys(newObj)).sort();
  return uniqueKeys.map((key) => {
    const oldState = oldObj[key];
    const currentState = newObj[key];
    if (!_.has(oldObj, key)) {
      return setTokenInfo('added', key, currentState);
    }
    if (!_.has(newObj, key)) {
      return setTokenInfo('removed', key, oldState);
    }
    if (_.isPlainObject(oldState) && _.isPlainObject(currentState)) {
      return setTokenInfo('nested', key, getDiffTree(oldState, currentState));
    }
    if (_.isEqual(currentState, oldState)) {
      return setTokenInfo('equal', key, currentState);
    }
    return setTokenInfo('updated', key, currentState, oldState);
  });
}
