import resolve from '../index';
import mockFetch from '../../mock-fetch';

describe('Resolve', () => {
  it('resolves and returns data', async () => {
    const result = await resolve(mockFetch);
    expect(JSON.parse(result)).toMatchSnapshot();
  });
});
