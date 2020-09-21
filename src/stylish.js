const indent = '    ';

const marker = (type) => {
  let getSign;
  if (type === 'added') {
    getSign = '  + ';
  } else if (type === 'removed') {
    getSign = '  - ';
  } else if (type === 'equal') {
    getSign = '    ';
  } else if (type === 'object') {
    getSign = '    ';
  } else if (type === 'updated') {
    getSign = '  ';
  } else {
    getSign = '  ';
  }
  return getSign;
};

const makePrefix = (sign, depth) => `${indent.repeat(depth)}${sign}`;

export default function stylish(data, depth = 0) {
  const acc = data.map((elem) => {
    const prefix = makePrefix(marker(elem.type), depth);
    if (elem.type === 'updated') {
      return (`${prefix}+ ${elem.key}: ${JSON.stringify(elem.newValue, null, 12).replace(/[",]/g, '').replace(/\}/g, `${makePrefix(indent, depth)}}`)}\n${prefix}- ${elem.key}: ${JSON.stringify(elem.oldValue, null, 12).replace(/[",]/g, '').replace(/\}/g, `${makePrefix(indent, depth)}}`)}`);
    } if (elem.type === 'object') {
      return (`${prefix}${elem.key}: ${stylish(elem.value, depth + 1)}\n${makePrefix(indent, depth)}}`);
    }
    return (`${prefix}${elem.key}: ${JSON.stringify(elem.value, null, depth + 8).replace(/[",]/g, '').replace(/\}/g, `${makePrefix(indent, depth)}}`)}`);
  });
  return `{\n${acc.join('\n')}`;
}
