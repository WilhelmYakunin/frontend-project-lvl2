import _ from 'lodash';

const indent = '  ';

const setIndicator = (type) => {
  switch (type) {
    case 'added':
      return '+ ';
    case 'removed':
      return '- ';
    default:
      return '  ';
  }
};
const getComplexValue = (objectValue, nestedness) => {
  if (!_.isPlainObject(objectValue)) {
    return objectValue.toString();
  }
  const acc = _.entries(objectValue).map(([key, value]) => {
    if (!_.isPlainObject(value)) {
      return `${indent.repeat(nestedness + 3)}${key}: ${value.toString()}`;
    }
    return `${indent.repeat(nestedness + 3)}${key}: ${getComplexValue(value, nestedness + 2)}`;
  });
  return `{\n${acc.join('\n')}\n${indent.repeat(nestedness + 1)}}`;
};

const makeDiffString = (depth, sign, key, value) => `${indent.repeat(depth)}${sign}${key}: ${getComplexValue(value, depth)}`;

export default function getStylish(data) {
  const getStrings = (inputData = data, depth = 1) => {
    const acc = _.values(inputData).map((node) => {
      const {
        type, key, state, oldState,
      } = node;
      switch (type) {
        case 'nested':
          return `${indent.repeat(depth + 1)}${key}: ${getStrings(state, depth + 2)}`;
        case 'updated':
          return `${makeDiffString(depth, '+ ', key, state)}\n${makeDiffString(depth, '- ', key, oldState)}`;
        default:
          return `${makeDiffString(depth, setIndicator(type), key, state)}`;
      }
    });
    return `{\n${acc.join('\n')}\n${indent.repeat(depth - 1)}}`;
  };
  return getStrings();
}
