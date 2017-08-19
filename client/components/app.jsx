import React from 'react';
// import io from 'socket.io-client';
import ProjectWrapper from './project-wrapper';
import loader from './loader';

class App extends React.PureComponent {
  componentDidMount() {
    // const socket = io.connect('http://localhost:3000');
    // socket.on('message', (message) => {
    //   console.log('new message:', message);
    // });
  }

  render() {
    const { data: projects } = this.props;
    return (
      <div className="monitor-wrapper full-height">
        <div className="recent-builds">
          <h1>Recent builds</h1>
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
