import React from 'react';
import Summary from './summary';
import projectSelector from '../selectors/project-selector';

class ProjectWrapper extends React.PureComponent {
  render() {
    const { building, passing, failing, unknown } = this.props.projects;

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
