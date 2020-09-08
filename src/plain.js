import _ from 'lodash';

const getValue = (state, value) => {
  if (_.isObject(value) && state !== 'object') {
    return '[complex value]';
  }
  return _.isBoolean(value) ? value : `'${value}'`;
};

export default function getPlain(data, elemKey = '') {
  const acc = data.map((elem) => {
    const porpertyName = `${elemKey}${elem.key}`;
    if (elem.state === 'added') {
      return (`Property '${porpertyName}' was added with value: ${getValue(elem.state, elem.value)}`);
    }
    if (elem.state === 'removed') {
      return (`Property '${porpertyName}' was removed`);
    }
    if (elem.state === 'updated') {
      return (`Property '${porpertyName}' was updated. From ${getValue(elem.state, elem.value.oldValue)} to ${getValue(elem.state, elem.value.newValue)}`);
    }
    return (elem.state === 'equal') ? `Property '${porpertyName}' was not changed` : getPlain(elem.value, `${porpertyName}.`);
  });
  return `${acc.join('\n')}`;
}
