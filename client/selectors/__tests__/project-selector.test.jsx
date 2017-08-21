import React from 'react';
import { shallow } from 'enzyme';
import projectSelector from '../project-selector';

const WrappedComponent = () => <div />;
const ProjectSelector = projectSelector(WrappedComponent);

describe('Project Selector', () => {
  it('renders the wrapped component', () => {
    const component = shallow(
      <ProjectSelector projects={[]} />,
    );
    expect(component).toMatchSnapshot();
  });

  it('sorts projects by activity', () => {
    const projects = [
      { activity: 'Sleeping' },
      { activity: 'Building' },
      { activity: 'SomethingElse' },
    ];
    const component = shallow(
      <ProjectSelector projects={projects} />,
    );
    expect(component.find(WrappedComponent).prop('projects')).toMatchSnapshot();
  });

  it('sorts projects by build status', () => {
    const projects = [
      { buildStatus: 'SomethingElse' },
      { buildStatus: 'Success' },
      { buildStatus: 'Failure' },
      { buildStatus: 'Unknown' },
    ];
    const component = shallow(
      <ProjectSelector projects={projects} />,
    );
    expect(component.find(WrappedComponent).prop('projects')).toMatchSnapshot();
  });

  it('sorts projects by activity then build time', () => {
    const projects = [
      { activity: 'Sleeping', buildTime: new Date(2000, 1, 1) },
      { activity: 'Building', buildTime: new Date(2000, 1, 2) },
      { activity: 'Building', buildTime: new Date(2000, 1, 3) },
    ];
    const component = shallow(
      <ProjectSelector projects={projects} />,
    );
    expect(component.find(WrappedComponent).prop('projects')).toMatchSnapshot();
  });

  it('sorts projects by build status then build time', () => {
    const projects = [
      { buildStatus: 'Success', buildTime: new Date(2000, 1, 1) },
      { buildStatus: 'Success', buildTime: new Date(2000, 1, 2) },
      { buildStatus: 'Failure', buildTime: new Date(2000, 1, 1) },
      { buildStatus: 'Failure', buildTime: new Date(2000, 1, 2) },
      { buildStatus: 'Unknown', buildTime: new Date(2000, 1, 2) },
      { buildStatus: 'Unknown', buildTime: new Date(2000, 1, 1) },
    ];
    const component = shallow(
      <ProjectSelector projects={projects} />,
    );
    expect(component.find(WrappedComponent).prop('projects')).toMatchSnapshot();
  });

  it('sorts projects by activity then build status then build time', () => {
    const projects = [
      { activity: 'Sleeping', buildStatus: 'Success', buildTime: new Date(2000, 1, 1) },
      { activity: 'Sleeping', buildStatus: 'Success', buildTime: new Date(2000, 1, 2) },
      { activity: 'Building', buildStatus: 'Failure', buildTime: new Date(2000, 1, 1) },
      { activity: 'Sleeping', buildStatus: 'Failure', buildTime: new Date(2000, 1, 2) },
      { activity: 'Sleeping', buildStatus: 'Unknown', buildTime: new Date(2000, 1, 2) },
      { activity: 'Building', buildStatus: 'Unknown', buildTime: new Date(2000, 1, 1) },
    ];
    const component = shallow(
      <ProjectSelector projects={projects} />,
    );
    expect(component.find(WrappedComponent).prop('projects')).toMatchSnapshot();
  });
});
