import defaultFetch from '../fetch';
import projects from './projects';
import mockFetch from '../mock-fetch';
import { serverConfig } from '../../config';

const fetchFn = serverConfig.useMocks ? mockFetch : defaultFetch;

export default async (fetch = fetchFn) => (
  JSON.stringify({
    ...await projects(fetch),
  })
);
