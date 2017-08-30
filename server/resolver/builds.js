import { decorateBuild } from '../decorator';

export default fetch => (
  fetch('/api/v1.1/recent-builds?limit=20&offset=5')
    .then(builds => builds.map(build => decorateBuild(build)))
    .catch(() => [])
);
