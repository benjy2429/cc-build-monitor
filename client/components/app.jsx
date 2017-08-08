import React from 'react';
import ProjectWrapper from './project-wrapper.jsx';
import loader from './loader.jsx';

@loader
export default class App extends React.Component {
    render() {
        const { data: projects } = this.props;

        const passing = projects.filter(project => project.buildStatus === 'Success');
        const failing = projects.filter(project => project.buildStatus === 'Failure');
        return (
            <div className="app">
                <h1>CircleCI Build Monitor</h1>
                <h1>{projects.length} apps, {passing.length} passing, {failing.length} failing</h1>
                <ProjectWrapper projects={projects} />
            </div>
        );
    }
};
