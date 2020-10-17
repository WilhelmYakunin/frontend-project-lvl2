import _ from 'lodash';

const getState = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return _.isBoolean(value) ? value : `'${value}'`;
};

export default function getPlain(data) {
  const getPlainLines = (inputData = data, elemKey = '') => {
    const acc = inputData.map((elem) => {
      const propertyName = () => ((elemKey === '') ? `${elem.key}` : `${elemKey}${elem.key}`);

      switch (elem.type) {
        case 'added':
          return (`Property '${propertyName()}' was added with value: ${getState(elem.value)}`);
        case 'removed':
          return (`Property '${propertyName()}' was removed`);
        case 'updated':
          return (`Property '${propertyName()}' was updated. From ${getState(elem.value)} to ${getState(elem.valueBefore)}`);
        case 'equal':
          return `Property '${propertyName()}' was not changed`;
        default:
          return getPlainLines(elem.value, `${propertyName()}.`);
      }
    });
    return `${acc.join('\n')}`;
  };
  return getPlainLines();
}
