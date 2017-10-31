import React from 'react';

const filterProjects = (projects) => {
  const filtered = { building: [], passing: [], failing: [], unknown: [] };

  projects.forEach((project) => {
    if (project.activity === 'Building') {
      filtered.building.push(project);
      return;
    }
    switch (project.lastBuildStatus) {
      case 'Success': filtered.passing.push(project); break;
      case 'Failure': filtered.failing.push(project); break;
      default: filtered.unknown.push(project); break;
    }
  });

  return filtered;
};

export default Component => (
  class ProjectSelector extends React.PureComponent {
    render() {
      const filteredProjects = filterProjects(this.props.projects);
      return <Component {...this.props} projects={filteredProjects} />;
    }
  }
);
