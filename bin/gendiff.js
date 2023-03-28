#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/genDiff.js';
import getParsedData from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const object1 = getParsedData(filepath1);
    const object2 = getParsedData(filepath2);
    const result = genDiff(object1, object2);
    console.log(result);
  })
  .parse();
