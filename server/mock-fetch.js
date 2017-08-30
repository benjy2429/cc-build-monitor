import mockProjects from '../mocks/projects/normal';
import mockBuilds from '../mocks/builds/normal';

export default function mockFetch(path) {
  if (path.includes('cc.xml')) {
    return Promise.resolve(mockProjects);
  }
  if (path.includes('recent-builds')) {
    return Promise.resolve(mockBuilds);
  }
  return Promise.reject();
}
