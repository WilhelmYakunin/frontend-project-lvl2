const expectedComplexObj = () => ([
  {
    state: 'object',
    marker: '  ',
    key: 'common',
    value: [
      {
        state: 'equal', marker: ' ', key: 'setting1', value: 'Value 1',
      },
      {
        state: 'removed', marker: '-', key: 'setting2', value: 200,
      },
      {
        state: 'updated',
        marker: '',
        key: 'setting3',
        value: { oldValue: true, newValue: { key: 'value' } },
      },
      {
        state: 'object',
        marker: '  ',
        key: 'setting6',
        value: [
          {
            state: 'equal', marker: ' ', key: 'key', value: 'value',
          },
          {
            state: 'object',
            marker: '  ',
            key: 'doge',
            value: [{
              state: 'updated', marker: '', key: 'wow', value: { oldValue: 'too much', newValue: 'so much' },
            }],
          },
          {
            state: 'added', marker: '+', key: 'ops', value: 'vops',
          },
        ],
      },
      {
        state: 'added', marker: '+', key: 'follow', value: false,
      },
      {
        state: 'added', marker: '+', key: 'setting4', value: 'blah blah',
      },
      {
        state: 'added',
        marker: '+',
        key: 'setting5',
        value: { key5: 'value5' },
      },
    ],
  },
  {
    state: 'object',
    marker: '  ',
    key: 'group1',
    value: [
      {
        state: 'updated',
        marker: '',
        key: 'baz',
        value: { oldValue: 'bas', newValue: 'bars' },
      },
      {
        state: 'equal', marker: ' ', key: 'foo', value: 'bar',
      },
      {
        state: 'updated',
        marker: '',
        key: 'nest',
        value: { oldValue: { key: 'value' }, newValue: 'str' },
      },
    ],
  },
  {
    state: 'removed',
    marker: '-',
    key: 'group2',
    value: { abc: 12345, deep: { id: 45 } },
  },
  {
    state: 'added',
    marker: '+',
    key: 'group3',
    value: { fee: 100500, deep: { id: { number: 45 } } },
  },
]);

export default expectedComplexObj;
