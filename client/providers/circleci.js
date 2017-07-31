// import rp from 'request-promise';
import x2jsLib from 'x2js';
import mock from './mock.js';

const parse = xml => {
    const parser = new x2jsLib();
    return parser.xml2js(xml);
}

const extractProjects = data => {
    return data['Projects']['Project'];
}

export default async () => {
    const body = mock;

    return extractProjects(parse(body));
};