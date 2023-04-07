const makeJSON = (tree) => {
  const result = JSON.stringify(tree, null, '  ');
  return result;
};

export default makeJSON;
