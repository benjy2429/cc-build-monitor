import defaultFetch from '../fetch';
import projects from './projects';
import mockFetch from '../mock-fetch';

const fetchFn = process.env.USE_MOCKS === 'true' ? mockFetch : defaultFetch;

export default async (fetch = fetchFn) => (
  JSON.stringify({
    projects: await projects(fetch),
  })
);
