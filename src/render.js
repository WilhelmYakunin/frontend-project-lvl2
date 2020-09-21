import stylish from './stylish.js';
import plain from './plain.js';

export default function render(tree, format = stylish) {
  if (format === 'json') {
    return JSON.stringify(tree, null, 2);
  } if (format === 'plain') {
    return `\n${plain(tree)}\n`;
  } if (format === 'stylish') {
    return `${stylish(tree)}\n}`;
  } return 'sorry. unknown output style, please check it';
}
