import React from 'react';
import Project from './project';

export default class StatusRow extends React.PureComponent {
  render() {
    const { projects, status } = this.props;

    return (
      <div className="status-row">
        <h2 className="status-heading">{projects.length} {status}</h2>
        <div className="status-projects">
          { projects.map(project => <Project key={project.name} project={project} />) }
        </div>
      </div>
    );
  }
}
