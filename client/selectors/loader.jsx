import React from 'react';
import axios from 'axios';

const refreshRate = 60000;
const defaultFetch = () => axios.get('/fetch');

export default (Component, fetch = defaultFetch) => (
  class Loader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: null,
      };
    }

    async fetchData() {
      this.setState({ loading: true });
      const res = await fetch();
      this.setState({ loading: false, data: res.data });
    }

    componentDidMount() {
      this.fetchData();
      this.intervalId = setInterval(this.fetchData.bind(this), refreshRate);
    }

    render() {
      const { loading, data } = this.state;

      return (
        <div className="full-height">
          { loading && <div className="loading-spinner" /> }
          { data && <Component {...this.props} {...data} /> }
        </div>
      );
    }
  }
);
