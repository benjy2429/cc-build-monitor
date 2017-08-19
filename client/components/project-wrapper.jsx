import React from 'react';
import Project from './project';

export default class ProjectWrapper extends React.PureComponent {
  render() {
    const { projects = [] } = this.props;

    return (
      <div className="project-wrapper">
        { projects.map(project => <Project key={project.name} project={project} />)}
      </div>
    );
  }
}
