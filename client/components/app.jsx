import React from 'react';
import ProjectWrapper from './project-wrapper';
import Overlay from './overlay';
import loader from '../selectors/loader';

class App extends React.PureComponent {
  render() {
    const { projects = [] } = this.props;
    return (
      <div className="monitor-wrapper full-height">
        { projects.length ?
          <ProjectWrapper projects={projects} /> :
          <Overlay title="No projects to show" subtitle="Is your API token correct?" />
        }
      </div>
    );
  }
}

export default loader(App);
export { App as UnwrappedApp };
