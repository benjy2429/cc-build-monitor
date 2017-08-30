import resolveProjects from '../projects';
import projectMock from '../../../mocks/projects/normal';
import projectMockMalformed from '../../../mocks/projects/malformed';

describe('Resolve projects', () => {
  it('parses and decorates xml data', async () => {
    const mockFetch = () => Promise.resolve(projectMock);
    const result = await resolveProjects(mockFetch);
    expect(result).toMatchSnapshot();
  });

  it('returns an empty array when the xml is malformed', async () => {
    const mockFetch = () => Promise.resolve(projectMockMalformed);
    const result = await resolveProjects(mockFetch);
    expect(result).toMatchSnapshot();
  });

  it('returns an empty array when no data is fetched', async () => {
    const mockFetch = () => Promise.resolve([]);
    const result = await resolveProjects(mockFetch);
    expect(result).toMatchSnapshot();
  });

  it('returns an empty array when the fetch fails', async () => {
    const mockFetch = () => Promise.reject();
    const result = await resolveProjects(mockFetch);
    expect(result).toMatchSnapshot();
  });
});
