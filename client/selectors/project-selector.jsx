import React from 'react';

const activityOrder = {
  Building: 1,
};

const statusOrder = {
  Failure: 2,
  Unknown: 3,
  Success: 4,
};

const sortByStatus = (a, b) => {
  const statusA = activityOrder[a.activity] || statusOrder[a.buildStatus] || 2;
  const statusB = activityOrder[b.activity] || statusOrder[b.buildStatus] || 2;

  if (statusA === statusB) {
    return b.buildTime - a.buildTime;
  }

  return statusA - statusB;
};

const reorderProjects = (projects) => {
  if (!projects.length) {
    return projects;
  }
  return projects.sort(sortByStatus);
};

export default Component => (
  class ProjectSelector extends React.PureComponent {
    render() {
      const { projects } = this.props;
      const sortedProjects = reorderProjects(projects);
      return <Component {...this.props} projects={sortedProjects} />;
    }
  }
);
