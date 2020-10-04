import _ from 'lodash';

const getState = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return _.isBoolean(value) ? value : `'${value}'`;
};

export default function getPlain(data, elemKey = '') {
  const acc = data.map((elem) => {
    const propertyName = () => {
      if (elemKey === '') {
        return `${elem.key}`;
      }
      return `${elemKey}${elem.key}`;
    };
    switch (elem.type) {
      case 'added':
        return (`Property '${propertyName()}' was added with value: ${getState(elem.value)}`);
      case 'removed':
        return (`Property '${propertyName()}' was removed`);
      case 'updated':
        return (`Property '${propertyName()}' was updated. From ${getState(elem.value)} to ${getState(elem.oldValue)}`);
      case 'equal':
        return `Property '${propertyName()}' was not changed`;
      default:
        return getPlain(elem.value, `${propertyName()}.`);
    }
  });
  return `${acc.join('\n')}`;
}
