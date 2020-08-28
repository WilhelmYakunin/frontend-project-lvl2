const prefix = (marker) => ` ${marker} `;

const stringify = (data) => {
  const acc = [];
  data.map((elem) => {
    if (elem.state === 'updated') {
      return acc.push(` + ${elem.key}: ${JSON.stringify(elem.value.newValue, null, 4).replace(/[",]/g, '')}\n - ${elem.key}: ${JSON.stringify(elem.value.oldValue, null, 4).replace(/[",]/g, '')}`);
    } if (elem.state === 'object') {
      return acc.push(`${prefix(elem.marker)}${elem.key}: ${stringify(elem.value)}`);
    }
    return acc.push(`${prefix(elem.marker)}${elem.key}: ${JSON.stringify(elem.value, null, 4).replace(/[",]/g, '')}`);
  });
  return `{\n${acc.join('\n')}\n}`;
};

export default stringify;
