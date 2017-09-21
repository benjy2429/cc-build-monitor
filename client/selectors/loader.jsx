import React from 'react';
import io from 'socket.io-client';

const SOCKET_ENDPOINT = 'http://localhost:3000';

export default Component => (
  class Loader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: {},
      };
    }

    componentDidMount() {
      const socket = io.connect(SOCKET_ENDPOINT);
      socket.on('monitorData', (data) => {
        this.setState({ loading: false, data: JSON.parse(data) });
      });
    }

    render() {
      const { loading, data } = this.state;

      return loading ?
        <div className="loading-spinner" /> :
        <Component {...this.props} {...data} />;
    }
  }
);
