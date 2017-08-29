import React from 'react';
import { shallow } from 'enzyme';
import { UnwrappedApp as App } from '../app';

const defaultProps = {
  data: {
    projects: [
      { name: 'project1' },
      { name: 'project2' },
    ],
    builds: [
      { name: 'build1' },
      { name: 'build2' },
    ],
  },
};

describe('App', () => {
  it('renders correctly', () => {
    const component = shallow(
      <App {...defaultProps} />,
    );
    expect(component).toMatchSnapshot();
  });
});
