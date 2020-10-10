import _ from 'lodash';

const getState = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return _.isBoolean(value) ? value : `'${value}'`;
};

export default function getPlain(data, elemKey = '') {
  const acc = data.map((elem) => {
    const propertyName = () => ((elemKey === '') ? `${elem.key}` : `${elemKey}${elem.key}`);

    switch (elem.type) {
      case 'added':
        return (`Property '${propertyName()}' was added with value: ${getState(elem.state)}`);
      case 'removed':
        return (`Property '${propertyName()}' was removed`);
      case 'updated':
        return (`Property '${propertyName()}' was updated. From ${getState(elem.state)} to ${getState(elem.oldState)}`);
      case 'equal':
        return `Property '${propertyName()}' was not changed`;
      default:
        return getPlain(elem.state, `${propertyName()}.`);
    }
  });
  return `${acc.join('\n')}`;
}
