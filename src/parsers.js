import yaml from 'js-yaml';

const parse = (data, extension) => {
  const dataToParse = data;
  switch (extension) {
    case 'yaml':
    case 'yml':
      return yaml.load(dataToParse);
    case 'json':
      return JSON.parse(dataToParse);
    default:
      throw new Error(`Unknown extension: '${extension}'!`);
  }
};

export default parse;
