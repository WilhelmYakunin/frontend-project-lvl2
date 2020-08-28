import _ from 'lodash';

const complexFilter = (state, value) => {
  if (_.isObject(value) && state !== 'object') {
    return '[complex value]';
  }
  return _.isBoolean(value) ? value : `'${value}'`;
};

function getPlain(data, elemKey = '') {
  const acc = data.map((elem) => {
    const porpertyName = `${elemKey}${elem.key}`;

    if (elem.state === 'equal') {
      return (`Property '${porpertyName}' was not changed`);
    }
    if (elem.state === 'added') {
      return (`Property '${porpertyName}' was added with value: ${complexFilter(elem.state, elem.value)}`);
    }
    if (elem.state === 'removed') {
      return (`Property '${porpertyName}' was removed`);
    }
    if (elem.state === 'updated') {
      return (`Property '${porpertyName}' was updated. From ${complexFilter(elem.state, elem.value.oldValue)} to ${complexFilter(elem.state, elem.value.newValue)}`);
    }
    return getPlain(elem.value, `${porpertyName}.`);
  });
  return `${acc.join('\n')}`;
}

export default getPlain;
