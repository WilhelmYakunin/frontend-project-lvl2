const expectedObj = () => ({
  ADDED: [{ key: 'verbose', valueAdded: true }],
  DELETED: [{ key: 'proxy', value: '123.234.53.22' },
    { key: 'follow', value: false }],
  EQUAL: [{ key: 'host', value: 'hexlet.io' }],
  MODIFIED: [{ key: 'timeout', value: 50, modifiedValue: 20 }],
});

export default expectedObj;
