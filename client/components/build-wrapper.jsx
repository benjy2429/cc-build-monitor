import React from 'react';
import Build from './build';

export default class BuildWrapper extends React.PureComponent {
  render() {
    const { builds } = this.props;

    return (
      <div className="build-wrapper">
        {builds.map(build => <Build key={build.vcs_revision} {...build} />)}
      </div>
    );
  }
}
