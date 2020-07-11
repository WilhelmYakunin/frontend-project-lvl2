#!/usr/bin/env node

const program = require('commander');

program
    .version('1.0.0') // alternative sub-command is `al`
    .description('Compares two configuration files and shows a difference.')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format');
    
    program.parse(process.argv);