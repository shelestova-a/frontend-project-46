import _ from 'lodash';

const getCurrentIdent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(depth * spacesCount - 2);
const getBracketIdent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(depth * spacesCount - spacesCount);

const stringify = (value, depth = 1) => {
  const iter = (currentValue, depth1) => {
    if (!_.isObject(currentValue) || currentValue === null) {
      return `${currentValue}`;
    }
    const currentIndent = getCurrentIdent(depth1);
    const bracketIndent = getBracketIdent(depth1);
    const arr = _.sortBy(Object.entries(currentValue), 0);

    const lines = arr.map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(value, depth);
};

const makeStylish = (tree) => {
  const iter = (object, depth = 1) => {
    const currentIndent = getCurrentIdent(depth);
    const bracketIndent = getBracketIdent(depth);
    const result = object.flatMap((node) => {
      switch (node.status) {
        case 'nested':
          return `${currentIndent}  ${node.key}: ${iter(node.children, depth + 1)}`;
        case 'added':
          return `${currentIndent}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'deleted':
          return `${currentIndent}- ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'unchanged':
          return `${currentIndent}  ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'modified':
          return [`${currentIndent}- ${node.key}: ${stringify(node.value1, depth + 1)}`,
          `${currentIndent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`];
        default:
        throw new Error(`Unknown status: '${node.status}'!`);
      }
    });
    return ['{', ...result, `${bracketIndent}}`].join('\n');
  };
  return iter(tree);
};

export default makeStylish;
