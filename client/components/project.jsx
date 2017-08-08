import React from 'react';
import TimeAgo from 'react-timeago';

export default class Project extends React.Component {
    name() {
        const {
            project: { name },
            longName
        } = this.props;
        return longName ? name : name.replace(/^.*\//, '');
    }

    render() {
        const {
            activity,
            buildStatus,
            buildNumber,
            buildTime
        } = this.props.project;

        return (
            <div className={`project project-${buildStatus.toLowerCase()}`}>
                <div className="project-name">{this.name()}</div>
                <div className="project-build-number">#{buildNumber}</div>
                <TimeAgo className="project-build-time" date={buildTime} />
            </div>
        );
    }
};
