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
});
