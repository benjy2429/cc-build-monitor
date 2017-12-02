import React from 'react';

const formatName = name => (
  window.config.stripOrgs ? name.substring(name.indexOf('/') + 1, name.length) : name
);

class Project extends React.PureComponent {
  render() {
    const { name, status, lastBuildLabel } = this.props;

    return (
      <div className={`project project-${status}`}>
        <div className="project-name">{formatName(name)}</div>
        <div className="project-status">{status}</div>
        <div className="project-details">#{lastBuildLabel}</div>
      </div>
    );
  }
}

export default Project;
