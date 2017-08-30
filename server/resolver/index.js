import fetcher from '../fetch';
import projects from './projects';
import builds from './builds';

export default async (fetch = fetcher) => (
  JSON.stringify({
    projects: await projects(fetch),
    builds: await builds(fetch),
  })
);
