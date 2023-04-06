import _ from 'lodash';

const genDiff = (object1, object2) => {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  const arrayTot = _.union(array1, array2);
  const arrayTotSort = _.sortBy(arrayTot);
  const tree = arrayTotSort.map((key) => {
    const value1 = object1[key];
    const value2 = object2[key];

    if (_.has(object1, key) && _.has(object2, key)) {
      if (_.isObject(value1) && _.isObject(value2)) {
        return { key, status: 'nested', children: genDiff(value1, value2) };
      } else if (value1 === value2) {
        return { key, status: 'unchanged', value: value1 };
      } else {
        return { key, status: 'modified', value1: value1, value2: value2 };
      }
    } else if (_.has(object1, key) && !_.has(object2, key)) {
      return { key, status: 'deleted', value: value1 };
    } else {
      return { key, status: 'added', value: value2 };
    }
  });

  return tree;
};

export default genDiff;
