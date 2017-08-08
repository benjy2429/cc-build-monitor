import axios from 'axios';
import x2jsLib from 'x2js';
import mock from './mock.js';
import decorate from './decorator.js';

const ENDPOINT = '';

const parse = xml => {
    const parser = new x2jsLib();
    return parser.xml2js(xml);
}

const build = data => {
    const rawProjects = data['Projects']['Project'];
    return rawProjects.map(project => decorate(project));
}

const fetchProjects = async () => (
    await Promise.resolve(mock)
    // await axios.get(ENDPOINT).then(res => res.data)
        .then(parse)
        .then(build)
);

export default async () => {
    return await fetchProjects();
};
