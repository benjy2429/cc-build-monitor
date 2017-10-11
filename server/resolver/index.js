import cache from 'memory-cache';
import fetcher from '../fetch';
import projects from './projects';

const CACHE_LENGTH = parseInt(process.env.POLL_RATE || '60000', 10);

const resolve = async (key, resolver, fetch) => {
  const cachedData = cache.get(key);

  if (cachedData) {
    return cachedData;
  }

  try {
    const freshData = await resolver(fetch);
    cache.put(key, freshData, CACHE_LENGTH);
    return freshData;
  } catch (e) {
    return null;
  }
};

export default async (fetch = fetcher) => (
  JSON.stringify({
    projects: await resolve('projects', projects, fetch),
  })
);
