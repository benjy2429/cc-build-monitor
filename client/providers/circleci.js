// import axios from 'axios';
import X2JSLib from 'x2js';
import mock from './mock';
import decorate from './decorator';

// const ENDPOINT = '';

const parse = (xml) => {
  const parser = new X2JSLib();
  return parser.xml2js(xml);
};

const build = (data) => {
  const rawProjects = data.Projects.Project;
  return rawProjects.map(project => decorate(project));
};

const fetchProjects = () => (
  Promise.resolve(mock)
    // await axios.get(ENDPOINT).then(res => res.data)
    .then(parse)
    .then(build)
);

export default () => fetchProjects();
