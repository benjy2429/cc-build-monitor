import mockProjects from '../mocks/projects/normal';

export default function mockFetch(path) {
  if (path.includes('cc.xml')) {
    return Promise.resolve(mockProjects);
  }
  return Promise.reject();
}
