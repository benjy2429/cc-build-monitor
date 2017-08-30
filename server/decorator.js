export function decorateProject(project) {
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
}

export function decorateBuild(build) {
  const {
    reponame,
    branch,
    vcs_revision,
    build_num,
    status,
    subject,
    build_time_millis,
    user: {
      avatar_url,
      name,
    } = {},
  } = build;

  return {
    repo: reponame,
    branch,
    buildNumber: build_num,
    status,
    buildTime: build_time_millis,
    commit: {
      hash: vcs_revision,
      message: subject,
    },
    user: {
      name,
      avatar: avatar_url,
    },
  };
}
