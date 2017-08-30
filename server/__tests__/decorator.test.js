import {
  decorateProject,
  decorateBuild,
} from '../decorator';

describe('Decorator', () => {
  describe('Projects', () => {
    const input = {
      _name: 'name',
      _activity: 'activity',
      _lastBuildStatus: 'lastBuildStatus',
      _lastBuildLabel: 'lastBuildLabel',
      _lastBuildTime: '2000-01-01',
    };

    it('decorates the input', () => {
      expect(decorateProject(input)).toMatchSnapshot();
    });

    it('ignores extra keys', () => {
      expect(decorateProject({ ...input, extra: 'extra' })).toMatchSnapshot();
    });

    it('defaults to undefined', () => {
      expect(decorateProject({})).toMatchSnapshot();
    });
  });

  describe('Builds', () => {
    const input = {
      reponame: 'my-project',
      branch: 'master',
      vcs_revision: 'abc123',
      build_num: 123,
      status: 'success',
      subject: 'my commit',
      build_time_millis: 10000,
      user: {
        avatar_url: 'https://example.com/avatar.png',
        name: 'Joe Bloggs',
      },
    };

    it('decorates the input', () => {
      expect(decorateBuild(input)).toMatchSnapshot();
    });

    it('ignores extra keys', () => {
      expect(decorateBuild({ ...input, extra: 'extra' })).toMatchSnapshot();
    });

    it('defaults to undefined', () => {
      expect(decorateBuild({})).toMatchSnapshot();
    });
  });
});
