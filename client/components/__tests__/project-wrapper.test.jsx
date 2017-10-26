import React from 'react';
import { shallow } from 'enzyme';
import { UnwrappedProjectWrapper as ProjectWrapper } from '../project-wrapper';

const defaultProps = {
  projects: {
    building: [{ name: 'org/project-1' }],
    passing: [{ name: 'org/project-2' }],
    failing: [{ name: 'org/project-3' }],
    unknown: [{ name: 'org/project-4' }],
  },
};

describe('Project wrapper', () => {
  it('renders correctly', () => {
    const component = shallow(
      <ProjectWrapper {...defaultProps} />,
    );

    expect(component).toMatchSnapshot();
  });
});
