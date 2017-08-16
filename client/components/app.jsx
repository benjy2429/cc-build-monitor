import React from 'react';
import io from 'socket.io-client';
import ProjectWrapper from './project-wrapper';
import loader from './loader';

class App extends React.PureComponent {
  componentDidMount() {
    const socket = io.connect('http://localhost:3000');
    socket.on('message', (message) => {
      console.log('new message:', message);
    });
  }

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
