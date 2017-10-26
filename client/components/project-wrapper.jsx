import React from 'react';
import Summary from './summary';
import projectSelector from '../selectors/project-selector';

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
        <Summary projects={building} category="building" />
        <Summary projects={failing} category="failing" />
        <Summary projects={unknown} category="unknown" />
        <Summary projects={passing} category="passing" />
      </div>
    );
  }
}

export default projectSelector(ProjectWrapper);
export { ProjectWrapper as UnwrappedProjectWrapper };
