import resolveProjects from '../projects';
import projectMock from '../../../mocks/projects/normal';
import projectMockMalformed from '../../../mocks/projects/malformed';
import projectMockEmpty from '../../../mocks/projects/empty';

describe('Resolve projects', () => {
  it('parses xml data', async () => {
    const mockFetch = () => Promise.resolve(projectMock);
    const result = await resolveProjects(mockFetch);
    expect(result).toMatchSnapshot();
  });

  it('returns an empty array when no data is fetched', async () => {
    const mockFetch = () => Promise.resolve(projectMockEmpty);
    const result = await resolveProjects(mockFetch);
    expect(result).toMatchSnapshot();
  });

  it('returns an error when the xml is malformed', async () => {
    const mockFetch = () => Promise.resolve(projectMockMalformed);
    const result = await resolveProjects(mockFetch);
    expect(result).toMatchSnapshot();
  });

  it('returns an error when the fetch fails', async () => {
    const mockFetch = () => Promise.reject({ message: 'an error' });
    const result = await resolveProjects(mockFetch);
    expect(result).toMatchSnapshot();
  });

  it('excludes projects in the blacklist', async () => {
    const mockConfig = { blacklist: ['project1'], whitelist: [] };
    const mockFetch = () => Promise.resolve(projectMock);
    const result = await resolveProjects(mockFetch, mockConfig);
    expect(result).toMatchSnapshot();
  });

  it('only includes projects in the whitelist', async () => {
    const mockConfig = { blacklist: [], whitelist: ['project1'] };
    const mockFetch = () => Promise.resolve(projectMock);
    const result = await resolveProjects(mockFetch, mockConfig);
    expect(result).toMatchSnapshot();
  });

  it('prioritises the whitelist over the blacklist', async () => {
    const mockConfig = { blacklist: ['project1'], whitelist: ['project2'] };
    const mockFetch = () => Promise.resolve(projectMock);
    const result = await resolveProjects(mockFetch, mockConfig);
    expect(result).toMatchSnapshot();
  });
});
