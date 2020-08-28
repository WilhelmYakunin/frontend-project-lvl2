const expectedComplexObj = () => ({
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      doge: {
        wow: 'too much',
      },
      key: 'value',
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
});

export default expectedComplexObj;