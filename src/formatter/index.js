import getDiffTree from '../index.js';
import makePlain from './plain.js';
import makeStylish from './stylish.js';
import makeJSON from './json.js';

const getFormatted = (filepath1, filepath2, formatter = 'stylish') => {
  const diffTree = getDiffTree(filepath1, filepath2);
  if (formatter === 'plain') {
    return makePlain(diffTree);
  } else if (formatter === 'json') {
    return makeJSON(diffTree);
  }
  return makeStylish(diffTree);
};

export default getFormatted;
