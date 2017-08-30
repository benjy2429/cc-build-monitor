import X2JSLib from 'x2js';
import { decorateProject } from '../decorator';

const parse = (xml) => {
  const parser = new X2JSLib();
  return parser.xml2js(xml);
};

const decorate = (data) => {
  const rawProjects = data.Projects.Project;
  return rawProjects.map(project => decorateProject(project));
};

export default fetch => (
  fetch('/cc.xml')
    .then(parse)
    .then(decorate)
    .catch(() => [])
);
