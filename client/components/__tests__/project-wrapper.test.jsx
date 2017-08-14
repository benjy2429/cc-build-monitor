import React from 'react';
import { shallow } from 'enzyme';
import ProjectWrapper from '../project-wrapper';

const defaultProps = {
  projects: [
    {
      buildStatus: 'Success',
      activity: 'Sleeping',
      name: 'org/project-1',
    },
    {
      buildStatus: 'Failure',
      activity: 'Sleeping',
      name: 'org/project-2',
    },
    {
      buildStatus: 'Failure',
      activity: 'Building',
      name: 'org/project-3',
    },
    {
      buildStatus: 'Unknown',
      activity: 'Sleeping',
      name: 'org/project-4',
    },
  ],
};

describe('Project wrapper', () => {
  it('renders correctly', () => {
    const component = shallow(
      <ProjectWrapper {...defaultProps} />,
    );

    expect(component).toMatchSnapshot();
  });
});
