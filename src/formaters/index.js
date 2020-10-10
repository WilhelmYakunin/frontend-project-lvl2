import getStylish from './stylish.js';
import getPlain from './plain.js';

export default function render(tree, format) {
  switch (format) {
    case 'json':
      return JSON.stringify(tree, null, 2);
    case 'plain':
      return getPlain(tree);
    case 'stylish':
      return getStylish(tree);
    default:
      throw new Error(`sorry. unknown output style ${format}, please check it`);
  }
}
