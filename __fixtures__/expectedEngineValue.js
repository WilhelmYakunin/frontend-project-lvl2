const expectedObj = () => ({
  ADDED: [{ key: 'verbose', value: true }],
  DELETED: [{ key: 'proxy', value: '123.234.53.22' },
    { key: 'follow', value: false }],
  EQUAL: [{ key: 'host', value: 'hexlet.io' }],
  MODIFIED: [{ key: 'timeout', value: 20 }],
  NOTEQUAL: [{ key: 'timeout', value: 50 }],
});

export default expectedObj;
