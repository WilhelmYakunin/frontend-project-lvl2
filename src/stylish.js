const indent = ' ';
const creatIndent = (n) => indent.repeat(n);
const prefix = (marker, iter = 0) => `${creatIndent(iter)} ${marker} `;

const stringify = (data) => {
  const acc = [];
  data.map((elem) => {
    if (elem.state === 'object') {
      return acc.push(`${prefix(elem.marker)}${elem.key}: ${stringify(elem.value)}`);
    }
    return acc.push(`${prefix(elem.marker)}${elem.key}: ${JSON.stringify(elem.value, null, 4).replace(/[",]/g, '')}`);
  });
  return `{\n${acc.join('\n')}\n}`;
};

export default stringify;
