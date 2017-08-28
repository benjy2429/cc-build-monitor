import React from 'react';
import moment from 'moment';

require('moment-duration-format');

export default class Ticker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time || 0,
    };
  }

  componentDidMount() {
    if (this.props.ticking) {
      this.ticker = setInterval(() => this.tick(), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  tick() {
    this.setState({
      time: this.state.time + 1000,
    });
  }

  render() {
    const time = moment.duration(this.state.time, 'milliseconds').format({ forceLength: true });
    return <time>{time}</time>;
  }
}
