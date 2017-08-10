import React from 'react';
import StatusRow from './status-row';

const statusRow = (projects, status) => (
  projects.length ? <StatusRow projects={projects} status={status} /> : null
);

export default class ProjectWrapper extends React.PureComponent {
  render() {
    const { projects = [] } = this.props;

    const failing = projects.filter(project => project.activity === 'Sleeping' && project.buildStatus === 'Failure');
    const building = projects.filter(project => project.activity === 'Building');
    const success = projects.filter(project => project.activity === 'Sleeping' && project.buildStatus === 'Success');
    const unknown = projects.filter(project => project.activity === 'Sleeping' && project.buildStatus === 'Unknown');

    return (
      <div className="project-wrapper">
        {[
          statusRow(building, 'Building'),
          statusRow(failing, 'Failing'),
          statusRow(success, 'Passing'),
          statusRow(unknown, 'Unknown'),
        ]}
      </div>
    );
  }
}
