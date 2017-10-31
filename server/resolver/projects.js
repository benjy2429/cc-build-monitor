import { parseString } from 'xml2js';

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
  return {
    projects: project,
  };
};

export default fetch => (
  fetch('/cc.xml')
    .then(promiseParser)
    .then(parse)
    .catch(error => ({ error: error.message }))
);
