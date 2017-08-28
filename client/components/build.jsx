import React from 'react';
import Ticker from './ticker';

export default class Build extends React.PureComponent {
  statusName() {
    const friendlyNames = {
      retried: 'Retired',
      canceled: 'Cancelled',
      infrastructure_fail: 'Errored',
      timedout: 'Timed out',
      not_run: 'Not run',
      running: 'Running',
      failed: 'Failed',
      queued: 'Queuing',
      scheduled: 'Scheduled',
      not_running: 'Not running',
      no_tests: 'No tests',
      fixed: 'Fixed',
      success: 'Success',
    };
    return friendlyNames[this.props.status] || 'Unknown';
  }

  buildTime() {
    const {
      build_time_millis: time,
      status,
    } = this.props;
    return time && <Ticker time={time} ticking={status === 'running'} />;
  }

  render() {
    const {
      reponame,
      branch,
      build_num: buildNumber,
      status,
      user: {
        name,
        avatar_url: avatar,
      },
    } = this.props;

    return (
      <div className={`build-bar build-${status}`}>
        <div className="build-status">{this.statusName()}</div>
        <img className="build-author-avatar" src={avatar} title={name} alt={name} />
        <div className="build-details">
          <div className="build-name text-ellipsis">#{buildNumber} - {reponame} / {branch}</div>
        </div>
        <div className="build-time">{this.buildTime()}</div>
      </div>
    );
  }
}
