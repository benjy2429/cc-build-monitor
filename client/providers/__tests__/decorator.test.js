import decorator from '../decorator';

const input = {
  _name: 'name',
  _activity: 'activity',
  _lastBuildStatus: 'lastBuildStatus',
  _lastBuildLabel: 'lastBuildLabel',
  _lastBuildTime: 'lastBuildTime',
};

describe('Decorator', () => {
  it('decorates the input', () => {
    expect(decorator(input)).toEqual({
      name: 'name',
      activity: 'activity',
      buildStatus: 'lastBuildStatus',
      buildNumber: 'lastBuildLabel',
      buildTime: 'lastBuildTime',
    });
  });

  it('ignores extra keys', () => {
    expect(decorator({ ...input, extra: 'extra' })).toEqual({
      name: 'name',
      activity: 'activity',
      buildStatus: 'lastBuildStatus',
      buildNumber: 'lastBuildLabel',
      buildTime: 'lastBuildTime',
    });
  });

  it('defaults to undefined', () => {
    expect(decorator({})).toEqual({});
  });
});
