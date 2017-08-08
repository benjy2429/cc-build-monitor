const buildTime = time => Date.parse(time);

export default ({
    _name,
    _activity,
    _lastBuildStatus,
    _lastBuildLabel,
    _lastBuildTime
}) => ({
    name: _name,
    activity: _activity,
    buildStatus: _lastBuildStatus,
    buildNumber: _lastBuildLabel,
    buildTime: _lastBuildTime
});
