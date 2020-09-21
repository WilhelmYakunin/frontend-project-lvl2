#!/usr/bin/env node

import program from 'commander';
import renderDiff from '../src/gendiff.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [json, stylish, plain]', 'output format', 'stylish')
  .action((filepath1, filepath2) => console.log(renderDiff(filepath1, filepath2, program.format)));

program.parse(process.argv);
