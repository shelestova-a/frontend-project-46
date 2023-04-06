import getDiffTree from '../index.js';
import makePlain from './plain.js';
import makeStylish from './stylish.js';

const getFormatted = (filepath1, filepath2, formatter = 'stylish') => {
  const diffTree = getDiffTree(filepath1, filepath2);
  if (formatter === 'plain') {
    return makePlain(diffTree);
  }
  return makeStylish(diffTree);
};

export default getFormatted;
