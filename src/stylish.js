function getStrOfDeepDifference(obj) {
  let string = '';
  obj.EQUAL.forEach(({ key, value }) => {
    string += `${key}: ${value}\r\n`;
  });
  obj.ADDED.forEach(({ key, value }) => {
    string += `${'  + '}${key}: ${value}\r\n`;
  });
  obj.MODIFIED.forEach(({ key, value, modifiedValue }) => {
    string += `${'  '}${key}: ${value}\r\n`;
    string += `${'  '}${key}: ${modifiedValue}\r\n`;
  });
  obj.DELETED.forEach(({ key, value }) => {
    string += `${'  - '}${key}: ${value}\r\n`;
  });
  return `${'{\r\n'
  }${string}}`;
}

export default getStrOfDeepDifference;
