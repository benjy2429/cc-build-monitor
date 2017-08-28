import React from 'react';
import { shallow } from 'enzyme';
import BuildWrapper from '../build-wrapper';

const defaultProps = {
  builds: [
    { vcs_revision: 'abcdef' },
    { vcs_revision: '123456' },
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
