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

  it('passes additional props through', () => {
    const component = shallow(
      <ProjectSelector className="my-class" />,
    );
    expect(component.find(WrappedComponent).prop('className')).toEqual('my-class');
  });

  it('adds a status to each project', () => {
    const projects = [
      { activity: 'Building', lastBuildStatus: 'Success' },
      { activity: 'Sleeping', lastBuildStatus: 'Success' },
      { activity: 'Sleeping', lastBuildStatus: 'Failure' },
      { activity: 'Sleeping', lastBuildStatus: 'Unknown' },
      { activity: 'Sleeping', lastBuildStatus: 'SomethingElse' },
    ];
    const component = shallow(
      <ProjectSelector projects={projects} />,
    );
    expect(component.find(WrappedComponent).prop('projects')).toMatchSnapshot();
  });

  it('sorts projects by last build time', () => {
    const projects = [
      { lastBuildTime: '2017-01-03' },
      { lastBuildTime: '2017-01-01' },
      { lastBuildTime: '2017-01-02' },
    ];
    const component = shallow(
      <ProjectSelector projects={projects} />,
    );
    expect(component.find(WrappedComponent).prop('projects')).toMatchSnapshot();
  });
});
