import React from 'react';
import TimeAgo from 'react-timeago';

const formatName = name => (
  window.config.stripOrgs ? name.substring(name.indexOf('/') + 1, name.length) : name
);

class Project extends React.PureComponent {
  render() {
    const { name, status, lastBuildLabel, lastBuildTime } = this.props;

    return (
      <div className={`project project-${status}`}>
        <div className="project-name text-ellipsis">{formatName(name)}</div>
        <div className="project-status">{status}</div>
        <div className="project-details project-build">#{lastBuildLabel}</div>
        <TimeAgo className="project-details project-time" date={lastBuildTime} />
      </div>
    );
  }
}

export default Project;
