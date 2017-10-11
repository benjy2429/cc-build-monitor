export default (project) => {
  const {
    _name,
    _activity,
    _lastBuildStatus,
    _lastBuildLabel,
    _lastBuildTime,
  } = project;

  return {
    name: _name,
    activity: _activity,
    buildStatus: _lastBuildStatus,
    buildNumber: _lastBuildLabel,
    buildTime: _lastBuildTime && new Date(_lastBuildTime),
  };
};
