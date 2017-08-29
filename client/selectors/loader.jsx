import React from 'react';

const defaultFetchData = () => (
  fetch('/fetch').then(res => res.json())
);

export default (Component, fetchData = defaultFetchData) => (
  class Loader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: {},
      };
    }

    componentDidMount() {
      fetchData().then((data) => {
        this.setState({ loading: false, data });
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
