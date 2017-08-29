import React from 'react';
import Build from './build';

export default class BuildWrapper extends React.PureComponent {
  render() {
    const { builds } = this.props;

    return (
      <div className="build-wrapper">
        {builds.map(build => <Build key={`${build.repo}${build.buildNumber}`} {...build} />)}
      </div>
    );
  }
}
