import cache from 'memory-cache';
import resolve from '../index';
import mockFetch from '../../mock-fetch';

describe('Resolve', () => {
  afterEach(() => {
    cache.clear();
  });

  it('resolves data from the source', async () => {
    const stubMockFetch = jest.fn().mockImplementation(mockFetch);
    const result = await resolve(stubMockFetch);
    expect(JSON.parse(result)).toMatchSnapshot();
    expect(stubMockFetch).toHaveBeenCalledTimes(2);
  });

  it('resolves data from the cache', async () => {
    cache.put('projects', [{ name: 'project' }]);
    cache.put('builds', [{ name: 'build' }]);
    const stubMockFetch = jest.fn();
    const result = await resolve(stubMockFetch);
    expect(JSON.parse(result)).toMatchSnapshot();
    expect(stubMockFetch).toHaveBeenCalledTimes(0);
  });

  it('returns null if the data cannot be resolved', async () => {
    const stubMockFetch = jest.fn().mockReturnValue(Promise.reject());
    const result = await resolve(stubMockFetch);
    expect(JSON.parse(result)).toMatchSnapshot();
  });
});
