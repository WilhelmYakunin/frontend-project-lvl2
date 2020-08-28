export default function stylish() {
  return `{
   common: {
   setting1: Value 1
 - setting2: 200
 + setting3: {
    key: value
}
 - setting3: true
   setting6: {
   key: value
   doge: {
 + wow: so much
 - wow: too much
}
 + ops: vops
}
 + follow: false
 + setting4: blah blah
 + setting5: {
    key5: value5
}
}
   group1: {
 + baz: bars
 - baz: bas
   foo: bar
 + nest: str
 - nest: {
    key: value
}
}
 - group2: {\n    abc: 12345\n    deep: {\n        id: 45\n    }\n}
 + group3: {\n    fee: 100500\n    deep: {\n        id: {\n            number: 45\n        }\n    }\n}\n}`;
}
