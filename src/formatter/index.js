import makePlain from './plain.js';
import makeStylish from './stylish.js';
import makeJSON from './json.js';

const getFormatted = (diffTree, formatter = 'stylish') => {
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
