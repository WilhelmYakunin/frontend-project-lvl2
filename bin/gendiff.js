#!/usr/bin/env node

import program from 'commander';
import genDiff from '../src/diffEngine.js';
import getParsed from '../src/parser.js';
import stylish from '../src/stylish.js';
import plain from '../src/plain.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const tree = genDiff(getParsed(filepath1), getParsed(filepath2));
    if (program.format === undefined) {
      console.log(stylish(tree));
    } else if (program.format === 'plain') {
      console.log(plain(tree));
    } else if (program.format === 'json') {
      console.log(JSON.stringify(tree, null, 4));
    } else console.log('please make sure you enter correct format of output');
  });

program.parse(process.argv);
