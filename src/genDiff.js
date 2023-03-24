import _ from 'lodash';

const genDiff = (object1, object2) => {
  const array1 = Object.entries(object1);
  const array2 = Object.entries(object2);
  const arrayTot = _.union(array1, array2);
  const arrayTotSort = _.sortBy(arrayTot, 0);

  const result = arrayTotSort.reduce((acc, [key, value]) => {
    if (!Object.hasOwn(object1, key)) {
      acc += `  + ${key}: ${value}\n`;
    } else if (!Object.hasOwn(object2, key)) {
      acc += `  - ${key}: ${value}\n`;
    } else if ((object1[key] !== value) && (object2[key] === value)) {
      acc += `  + ${key}: ${value}\n`;
    } else if ((object2[key] !== value) && (object1[key] === value)) {
      acc += `  - ${key}: ${value}\n`;
    } else {
      if (!acc.includes(`    ${key}: ${value}\n`)) {
        acc += `    ${key}: ${value}\n`;
      }
    }
    return acc;
  }, '{\n');

  return `${result}}`;
};

export default genDiff;
