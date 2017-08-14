import React from 'react';
import { shallow } from 'enzyme';
import Project from '../project';

const defaultProps = {
  project: {
    buildStatus: 'Success',
    activity: 'Sleeping',
    name: 'org/my-project',
  },
};

describe('Project', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Project {...defaultProps} />,
    );

    expect(component).toMatchSnapshot();
  });

  it('renders with the project\'s long name', () => {
    const component = shallow(
      <Project {...defaultProps} longName />,
    );

    expect(component).toMatchSnapshot();
  });
});
