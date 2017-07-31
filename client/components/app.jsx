import React from 'react';
import fetchData from '../providers/circleci.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        const projects = fetchData().then(projects => {
            this.setState({ projects });
        });
    }

    renderProjects() {
        return this.state.projects.forEach(project =>
            <p>{project._name}</p>
        );
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                { this.renderProjects() }
            </div>
        );
    }
};
