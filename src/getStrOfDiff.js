function getStrOfDifference(obj) {
  let string = '';
  obj.EQUAL.forEach(({ key, value }) => {
    string += `   ${key}: ${value}\r\n`;
  });
  obj.MODIFIED.forEach(({ key, value }) => {
    string += `${'  + '}${key}: ${value}\r\n`;
  });
  obj.NOTEQUAL.forEach(({ key, value }) => {
    string += `${'  - '}${key}: ${value}\r\n`;
  });
  obj.ADDED.forEach(({ key, value }) => {
    string += `${'  + '}${key}: ${value}\r\n`;
  });
  obj.DELETED.forEach(({ key, value }) => {
    string += `${'  - '}${key}: ${value}\r\n`;
  });
  return `${'{'
  }${string}}`;
}

export default getStrOfDifference;
