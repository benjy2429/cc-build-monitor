import React from 'react';
import { shallow } from 'enzyme';
import BuildWrapper from '../build-wrapper';

const defaultProps = {
  builds: [
    { repo: 'project1', buildNumber: 1 },
    { repo: 'project2', buildNumber: 2 },
  ],
};

describe('Build wrapper', () => {
  it('renders correctly', () => {
    const component = shallow(
      <BuildWrapper {...defaultProps} />,
    );

    expect(component).toMatchSnapshot();
  });
});
