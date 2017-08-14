import React from 'react';
import ProjectWrapper from './project-wrapper';
import loader from './loader';

class App extends React.PureComponent {
  render() {
    const { data: projects } = this.props;
    return (
      <div className="full-height">
        <ProjectWrapper projects={projects} />
      </div>
    );
  }
}

export default loader(App);
export { App as UnwrappedApp };
