import _ from 'lodash';

const genDiff = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const keysUnited = _.union(keys1, keys2);
  const keysUnitedSorted = _.sortBy(keysUnited);
  const tree = keysUnitedSorted.map((key) => {
    const value1 = object1[key];
    const value2 = object2[key];

    if (_.has(object1, key) && _.has(object2, key)) {
      if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
        return { key, status: 'nested', children: genDiff(value1, value2) };
      }
      if (_.isEqual(value1, value2)) {
        return { key, status: 'unchanged', value: value1 };
      }
      return {
        key, status: 'modified', value1, value2,
      };
    }
    if (_.has(object1, key) && !_.has(object2, key)) {
      return { key, status: 'deleted', value: value1 };
    }
    return { key, status: 'added', value: value2 };
  });

  return tree;
};

export default genDiff;
