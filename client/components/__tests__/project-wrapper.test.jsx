import React from 'react';
import { shallow } from 'enzyme';
import { UnwrappedProjectWrapper as ProjectWrapper } from '../project-wrapper';

const defaultProps = {
  projects: [
    { name: 'org/project-1', activity: 'Building' },
    { name: 'org/project-2', buildStatus: 'Success' },
    { name: 'org/project-3', buildStatus: 'Failure' },
    { name: 'org/project-4', buildStatus: 'Unknown' },
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
