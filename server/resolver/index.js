import defaultFetch from '../fetch';
import projects from './projects';
import mockFetch from '../mock-fetch';
import config from '../../config';

const fetchFn = config.useMocks ? mockFetch : defaultFetch;

export default async (fetch = fetchFn) => (
  JSON.stringify({
    ...await projects(fetch),
  })
);
