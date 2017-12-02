import React from 'react';
import Project from './project';
import projectSelector from '../selectors/project-selector';

class ProjectWrapper extends React.PureComponent {
  render() {
    const { projects } = this.props;

    if (!projects.length) {
      return null;
    }

    return (
      <div className="project-wrapper">
        { projects.map(project => <Project key={project.name} {...project} />) }
      </div>
    );
  }
}

export default projectSelector(ProjectWrapper);
export { ProjectWrapper as UnwrappedProjectWrapper };
