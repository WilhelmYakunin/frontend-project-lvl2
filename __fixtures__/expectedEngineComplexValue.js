const expectedComplexObj = () => ({
  ADDED: [],
  DELETED: [],
  EQUAL: [
    {
      key: 'common',
      value: {
        EQUAL: [{ key: 'setting1', value: 'Value 1' },
          {
            key: 'setting6',
            value: {
              EQUAL: [{
                key: 'doge',
                value: {
                  EQUAL: [],
                  ADEDD: [{ key: 'ops', value: 'vops' }],
                  DELETED: [],
                  MODIFIED: [{ key: 'wow', value: 'so much' }],
                  NOTEQUAL: [{ key: 'wow', value: 'too much' }],
                },
              }],
            },
          }],
        ADDED: [{ key: 'follow', value: false },
          { key: 'setting3', value: { key: 'key', value: 'value' } },
          { key: 'setting4', value: 'blah blah' },
          { key: 'setting5', value: { key: 'key5', value: 'value5' } }],
      },
    }],
  MODIFIED: [],
  NOTEQUAL: [],
});

export default expectedComplexObj;
