import { Command } from 'commander';

import getParsedObject from '../src/index.js';

import genDiff from '../src/genDiff.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const object1 = getParsedObject(filepath1);
    const object2 = getParsedObject(filepath2);
    const result = genDiff(object1, object2);
    console.log(result);
  })
  .parse()
