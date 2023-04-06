const checkComplexity = (value) => {
  if (value === null) {
    return value;
  } else if (typeof value === 'object') {
    return `[complex value]`;
  } else if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const makePlain = (tree) => {
  const iter = (treeIter, path = '') => {
    const result = treeIter
      .filter((node) => node.status !== 'unchanged')
      .flatMap((node) => {
        const makePath = (key) => {
          if (path.length === 0) {
            return `${key}`;
          }
          return `${path}.${key}`;
        };
        const pathToCurrentProperty = `${makePath(node.key)}`;
        switch (node.status) {
          case 'nested':
            return iter(node.children, `${pathToCurrentProperty}`);
          case 'added':
            return `Property '${pathToCurrentProperty}' was added with value: ${checkComplexity(node.value)}`;
          case 'deleted':
            return `Property '${pathToCurrentProperty}' was removed`;
          case 'modified':
            return `Property '${pathToCurrentProperty}' was updated. From ${checkComplexity(node.value1)} to ${checkComplexity(node.value2)}`;
          default:
          throw new Error(`Unknown status: '${node.status}'!`);
        }
      });
    return result.join('\n');
  };
  return iter(tree);
};

export default makePlain;
