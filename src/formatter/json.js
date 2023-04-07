const makeJSON = (tree) => {
  const iter = (value) => {
    const result = value.reduce((acc, object) => {
      const arr = Object.entries(object);
      const str = arr.map(([key, val]) => {
        if (key === 'children') {
          return `"${key}":[${iter(val)}]`;
        }
        return `"${key}":${JSON.stringify(val)}`;
      }).join(',');
      return [...acc, `{${str}}`];
    }, []).join(',');
    return result;
  };
  return `${iter(tree)}`;
};

export default makeJSON;
