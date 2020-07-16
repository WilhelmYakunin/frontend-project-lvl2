#!/usr/bin/env node

import genDiff from '../src/gendiff.js';
import program from 'commander';

program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format')
    .action(function (file1, file2) {
        console.log(genDiff(file1, file2));
    });
    
    program.parse(process.argv);