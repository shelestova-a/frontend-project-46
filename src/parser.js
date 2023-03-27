import yaml from 'js-yaml';

const getParsedObject = (content, exten) => {
  let objectParsed;
  if (exten.toLowerCase() === 'json') {
    objectParsed = JSON.parse(content);
  } else if ((exten.toLowerCase() === 'yaml') || (exten.toLowerCase() === 'yml')) {
    objectParsed = yaml.load(content);
  }
  return objectParsed;
};

export default getParsedObject;
