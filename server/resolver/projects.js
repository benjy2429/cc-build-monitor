import { parseString } from 'xml2js';
import { serverConfig } from '../../config';

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

const filter = (projects, config) => {
  const { whitelist, blacklist } = config;
  if (whitelist.length) {
    return projects.filter(({ name }) => whitelist.includes(name));
  }
  if (blacklist.length) {
    return projects.filter(({ name }) => !blacklist.includes(name));
  }
  return projects;
};

export default (fetch, config = serverConfig) => (
  fetch()
    .then(promiseParser)
    .then(parse)
    .then(projects => filter(projects, config))
    .then(projects => ({ projects }))
    .catch(error => ({ error: error.message }))
);

