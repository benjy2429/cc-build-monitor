import { parseString } from 'xml2js';
import config from '../../config';

const promiseParser = xml => new Promise((resolve, reject) => (
  parseString(
    xml,
    { normalizeTags: true, mergeAttrs: true, explicitArray: false },
    (err, result) => {
      if (err) {
        console.error('XML parser error:', err.message);
        return reject({ message: 'Error parsing response' });
      }
      return resolve(result);
    })
));

const parse = (data) => {
  const { projects: { project = [] } = {} } = data;
  return project;
};

const filter = (projects) => {
  const { whitelist, blacklist } = config;
  if (whitelist.length) {
    return projects.filter(({ name }) => whitelist.includes(name));
  }
  if (blacklist.length) {
    return projects.filter(({ name }) => !blacklist.includes(name));
  }
  return projects;
};

export default fetch => (
  fetch('/cc.xml')
    .then(promiseParser)
    .then(parse)
    .then(filter)
    .then(projects => ({ projects }))
    .catch(error => ({ error: error.message }))
);
