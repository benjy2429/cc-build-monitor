import React from 'react';
import Project from './project';
import projectSelector from '../selectors/project-selector';

const renderSummary = (projects, category) => {
  if (!projects.length) {
    return null;
  }

  return (
    <div className="project-summary">
      <h2 className="project-header">{projects.length} {category}</h2>
      { projects.map(project => (
        <Project key={project.name} project={project} />
      )) }
    </div>
  );
};

class ProjectWrapper extends React.PureComponent {
  filterProjects() {
    const filtered = { building: [], passing: [], failing: [], unknown: [] };

    this.props.projects.forEach((project) => {
      if (project.activity === 'Building') {
        filtered.building.push(project);
        return;
      }
      switch (project.buildStatus) {
        case 'Success': filtered.passing.push(project); break;
        case 'Failure': filtered.failing.push(project); break;
        default: filtered.unknown.push(project); break;
      }
    });

    return filtered;
  }

  render() {
    const { building, passing, failing, unknown } = this.filterProjects();

    return (
      <div className="project-wrapper">
        { renderSummary(building, 'Building') }
        { renderSummary(failing, 'Failing') }
        { renderSummary(unknown, 'Unknown') }
        { renderSummary(passing, 'Passing') }
      </div>
    );
  }
}

export default projectSelector(ProjectWrapper);
export { ProjectWrapper as UnwrappedProjectWrapper };
