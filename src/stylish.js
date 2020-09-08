const indent = '  ';
const offset = 2;

const makePrefix = (marker, depth) => `${indent}${indent.repeat(depth)}${marker}`;

export default function stringify(data, depth = 0) {
  const acc = data.map((elem) => {
    const prefix = makePrefix(elem.marker, depth);
    if (elem.state === 'updated') {
      return (`${prefix}+ ${elem.key}: ${JSON.stringify(elem.value.newValue, null, `${makePrefix(elem.marker, depth * 2)}`).replace(/[",]/g, '').replace(/\}/g, `  ${prefix}}`)}\n${prefix}- ${elem.key}: ${JSON.stringify(elem.value.oldValue, null, `${makePrefix(elem.marker, depth * 2)}`).replace(/[",]/g, '').replace(/\}/g, `  ${prefix}}`)}`);
    } if (elem.state === 'object') {
      return (`${prefix}${elem.key}: ${stringify(elem.value, depth + offset)}\n${makePrefix('  ', depth)}}`);
    }
    return (`${prefix} ${elem.key}: ${JSON.stringify(elem.value, null, depth + 6).replace(/[",]/g, '').replace(/\}/g, `${makePrefix('  ', depth)}}`)}`);
  });
  return `{\n${acc.join('\n')}`;
}
