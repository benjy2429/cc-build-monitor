import React from 'react';
import { shallow } from 'enzyme';
import Project from '../project';

const defaultProps = {
  name: 'some-project',
  status: 'passed',
  lastBuildLabel: '42',
};

describe('Project', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Project {...defaultProps} />,
    );
    expect(component).toMatchSnapshot();
  });
});
