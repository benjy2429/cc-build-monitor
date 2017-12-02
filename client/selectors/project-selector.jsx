import React from 'react';

const categorizeProjects = projects => (
  projects.map((project) => {
    if (project.activity === 'Building') {
      return {
        ...project,
        status: 'building',
      };
    }
    const statusMap = {
      Success: 'passed',
      Failure: 'failed',
    };
    return {
      ...project,
      status: statusMap[project.lastBuildStatus] || 'unknown',
    };
  })
);

const sortProjects = projects => (
  projects.sort((a, b) => new Date(a.lastBuildTime) < new Date(b.lastBuildTime))
);

export default Component => (
  class ProjectSelector extends React.PureComponent {
    render() {
      const { projects = [] } = this.props;
      const cleanedProjects = sortProjects(categorizeProjects(projects));
      return <Component {...this.props} projects={cleanedProjects} />;
    }
  }
);
