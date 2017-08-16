import axios from 'axios';
import X2JSLib from 'x2js';
import mock from '../../mocks/mock-original';
import decorate from './decorator';

const ENDPOINT = '';

const parse = (xml) => {
  const parser = new X2JSLib();
  return parser.xml2js(xml);
};

const build = (data) => {
  const rawProjects = data.Projects.Project;
  return rawProjects.map(project => decorate(project));
};

const fetchProjects = fetch => (
  fetch.then(res => res.data)
    .then(parse)
    .then(build)
    .catch(() => [])
);

// const defaultFetch = axios.get(ENDPOINT);
const defaultFetch = Promise.resolve({ data: mock });

export default (fetch = defaultFetch) => fetchProjects(fetch);
