import getDiffTree from '../index.js';
import makePlain from './plain.js';
import makeStylish from './stylish.js';
import makeJSON from './json.js';

const getFormatted = (filepath1, filepath2, formatter = 'stylish') => {
  const diffTree = getDiffTree(filepath1, filepath2);
  switch (formatter) {
    case 'stylish':
      return makeStylish(diffTree);
    case 'plain':
      return makePlain(diffTree);
    case 'json':
      return makeJSON(diffTree);
    default:
      throw new Error(`Unknown formatter: '${formatter}'!`);
  }
};

export default getFormatted;
