import React from 'react';
import ProjectWrapper from './project-wrapper';
import BuildWrapper from './build-wrapper';
import loader from '../selectors/loader';

class App extends React.PureComponent {
  render() {
    const { projects = [], builds = [] } = this.props;
    return (
      <div className="monitor-wrapper full-height">
        <div className="recent-builds">
          <h1>Recent builds</h1>
          <BuildWrapper builds={builds} />
        </div>
        <div className="projects">
          <h1>{projects.length} Projects</h1>
          <ProjectWrapper projects={projects} />
        </div>
      </div>
    );
  }
}

export default loader(App);
export { App as UnwrappedApp };
