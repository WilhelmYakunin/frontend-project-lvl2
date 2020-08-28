export default function stylish() {
  return `{\n   common: {\n   setting1: Value 1\n - setting2: 200\n + setting3: {\n    key: value\n}\n - setting3: true\n   setting6: {\n   key: value\n   doge: {\n + wow: so much\n - wow: too much\n}\n + ops: vops\n}\n + follow: false\n + setting4: blah blah\n + setting5: {\n    key5: value5\n}\n}
   group1: {\n + baz: bars\n - baz: bas\n   foo: bar\n + nest: str\n - nest: {\n    key: value\n}\n}
 - group2: {\n    abc: 12345\n    deep: {\n        id: 45\n    }\n}
 + group3: {\n    fee: 100500\n    deep: {\n        id: {\n            number: 45\n        }\n    }\n}\n}`;
}
