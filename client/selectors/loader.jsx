import React from 'react';
import axios from 'axios';

const defaultFetch = () => axios.get('/fetch');

export default (Component, fetch = defaultFetch) => (
  class Loader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: {},
      };
    }

    async componentDidMount() {
      const res = await fetch();
      this.setState({ loading: false, data: res.data });
    }

    render() {
      const { loading, data } = this.state;

      return loading ?
        <div className="loading-spinner" /> :
        <Component {...this.props} {...data} />;
    }
  }
);
