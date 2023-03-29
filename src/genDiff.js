import _ from 'lodash';

const genDiff = (object1, object2) => {
  const array1 = Object.entries(object1);
  const array2 = Object.entries(object2);
  const arrayTot = _.union(array1, array2);
  const arrayTotSort = _.sortBy(arrayTot, 0);

  const result = arrayTotSort.reduce((acc, [key, value]) => {
    if (!(key in object1)) {
      acc[`+ ${key}`] = value;
    } else if (!(key in object2)) {
      acc[`- ${key}`] = value;
    } else if (object1[key] !== value && object2[key] === value) {
      acc[`+ ${key}`] = value;
    } else if (object2[key] !== value && object1[key] === value) {
      acc[`- ${key}`] = value;
    } else {
      if (!(key in acc) || acc[key] !== value) {
        acc[`  ${key}`] = value;
      }
    }
    return acc;
  }, {});

  const resultStr = Object.entries(result).map(([key, value]) => `  ${key}: ${value}`).join('\n');

  return `{\n${resultStr}\n}`;
};

export default genDiff;
