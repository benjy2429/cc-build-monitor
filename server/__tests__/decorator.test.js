import decorateProject from '../decorator';

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
});
