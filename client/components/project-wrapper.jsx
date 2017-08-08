import React from 'react';
import Project from './project.jsx';

export default class ProjectWrapper extends React.Component {
    render() {
        const { projects = [] } = this.props;
        return (
            <div className="project-wrapper">
                {
                    projects.map(project => <Project project={project} />)
                }
            </div>
        );
    }
};
