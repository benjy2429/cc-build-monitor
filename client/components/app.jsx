import React from 'react';
import ProjectWrapper from './project-wrapper';
import loader from './loader';

@loader
export default class App extends React.Component {
  render() {
    const { data: projects } = this.props;
    return (
      <div className="full-height">
        <ProjectWrapper projects={projects} />
      </div>
    );
  }
}
