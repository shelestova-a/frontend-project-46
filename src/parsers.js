import yaml from 'js-yaml';

const parse = (data, ext) => {
  const dataToParse = data;
  switch (ext) {
    case 'yaml':
      return yaml.load(dataToParse);
    case 'yml':
      return yaml.load(dataToParse);
    case 'json':
      return JSON.parse(dataToParse);
    default:
      throw new Error(`Unknown extension: '${ext}'!`);
  }
};

export default parse;
