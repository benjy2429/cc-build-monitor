import React from 'react';
import { shallow } from 'enzyme';
import { UnwrappedProjectWrapper as ProjectWrapper } from '../project-wrapper';

const defaultProps = {
  projects: [
    { name: 'org/project-1' },
    { name: 'org/project-2' },
    { name: 'org/project-3' },
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
