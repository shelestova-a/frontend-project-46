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
// const mkNode = (name, status = '', children = [], value = '') => ({
//   name,
//   status,
//   children,
//   value,
// });

// const genDiff = (object1, object2) => {
//   const array1 = Object.keys(object1);
//   const array2 = Object.keys(object2);
//   const arrayTot = _.union(array1, array2);
//   const arrayTotSort = _.sortBy(arrayTot, 0);
//   const tree = arrayTotSort.map((key) => {
//     const value1 = object1[key];
//     const value2 = object2[key];
//     const node = mkNode(key);

//     if (_.has(object1, key) && _.has(object2, key)) {
//       if (_.isObject(value1) && _.isObject(value2)) {
//         return { key, status: 'nested', children: genDiff(value1, value2) };
//       } else if (value1 === value2) {
//         node.status = 'unchanged';
//         node.value = value1;
//       } else {
//         node.status = 'modified';
//         node.value1 = va
//         node.value2 = value2;
//       }
//     } else if (_.has(object1, key) && !_.has(object2, key)) {
//       node.status = 'deleted';
//       node.value = value1;
//     } else {
//       node.status = 'added';
//       node.value = value2;
//     }
//     return node;
//   });

//   return tree;
// };

// const genDiff = (object1, object2) => {
//   const array1 = Object.entries(object1);
//   const array2 = Object.entries(object2);
//   const arrayTot = _.union(array1, array2);
//   const arrayTotSort = _.sortBy(arrayTot, 0);

//   const result = arrayTotSort.reduce((acc, [key, value]) => {
//     if (!(key in object1)) {
//       acc[`+ ${key}`] = value;
//     } else if (!(key in object2)) {
//       acc[`- ${key}`] = value;
//     } else if (object1[key] !== value && object2[key] === value) {
//       acc[`+ ${key}`] = value;
//     } else if (object2[key] !== value && object1[key] === value) {
//       acc[`- ${key}`] = value;
//     } else {
//       if (!(key in acc) || acc[key] !== value) {
//         acc[`  ${key}`] = value;
//       }
//     }
//     return acc;
//   }, {});

//   const resultStr = Object.entries(result).map(([key, value]) => `  ${key}: ${value}`).join('\n');

//   return `{\n${resultStr}\n}`;
// };

export default genDiff;
