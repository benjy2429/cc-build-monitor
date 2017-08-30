import resolveBuilds from '../builds';
import buildMock from '../../../mocks/builds/normal';

describe('Resolve builds', () => {
  it('parses and decorates json data', async () => {
    const mockFetch = () => Promise.resolve(buildMock);
    const result = await resolveBuilds(mockFetch);
    expect(result).toMatchSnapshot();
  });

  it('returns an empty array when no data is fetched', async () => {
    const mockFetch = () => Promise.resolve([]);
    const result = await resolveBuilds(mockFetch);
    expect(result).toMatchSnapshot();
  });

  it('returns an empty array when the fetch fails', async () => {
    const mockFetch = () => Promise.reject();
    const result = await resolveBuilds(mockFetch);
    expect(result).toMatchSnapshot();
  });
});
