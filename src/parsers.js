import yaml from 'js-yaml';

const parse = (content, exten) => {
  const contentToParse = content;
  if ((exten.toLowerCase() === '.yaml') || (exten.toLowerCase() === '.yml')) {
    return yaml.load(contentToParse);
  }
  return JSON.parse(contentToParse);
};

export default parse;
