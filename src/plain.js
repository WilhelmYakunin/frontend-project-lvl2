import _ from 'lodash';

const getValue = (type, value) => {
  if (_.isObject(value) && type !== 'object') {
    return '[complex value]';
  }
  return _.isBoolean(value) ? value : `'${value}'`;
};

export default function getPlain(data, elemKey = '') {
  const acc = data.map((elem) => {
    const porpertyName = `${elemKey}${elem.key}`;
    if (elem.type === 'added') {
      return (`Property '${porpertyName}' was added with value: ${getValue(elem.type, elem.value)}`);
    }
    if (elem.type === 'removed') {
      return (`Property '${porpertyName}' was removed`);
    }
    if (elem.type === 'updated') {
      return (`Property '${porpertyName}' was updated. From ${getValue(elem.type, elem.oldValue)} to ${getValue(elem.type, elem.newValue)}`);
    }
    return (elem.type === 'equal') ? `Property '${porpertyName}' was not changed` : getPlain(elem.value, `${porpertyName}.`);
  });
  return `${acc.join('\n')}`;
}
