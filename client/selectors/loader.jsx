import React from 'react';
import axios from 'axios';
import Overlay from '../components/overlay';

const refreshRate = 60000;
const defaultFetch = () => axios({
  url: '/fetch',
  timeout: 5000,
});

export default (Component, fetch = defaultFetch) => (
  class Loader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        error: false,
        data: null,
      };
    }

    async fetchData() {
      this.setState({ loading: true });
      try {
        const res = await fetch();
        if (res.data.error) {
          this.setState({ loading: false, error: res.data.error });
          return;
        }
        this.setState({ loading: false, error: false, data: res.data });
      } catch (e) {
        this.setState({ error: e.message, loading: false });
      }
    }

    componentDidMount() {
      this.fetchData();
      this.intervalId = setInterval(this.fetchData.bind(this), refreshRate);
    }

    componentWillUnmount() {
      clearInterval(this.intervalId);
    }

    render() {
      const { loading, error, data } = this.state;

      return (
        <div className="full-height">
          { error && <Overlay title="Error fetching data" subtitle={error} /> }
          { loading && <div className="loading-spinner" /> }
          { data && <Component {...this.props} {...data} /> }
        </div>
      );
    }
  }
);
