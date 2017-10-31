import React from 'react';
import { shallow } from 'enzyme';
import { UnwrappedApp as App } from '../app';

const defaultProps = {
  projects: [
    { name: 'project1' },
    { name: 'project2' },
  ],
};

describe('App', () => {
  it('renders projects correctly', () => {
    const component = shallow(
      <App {...defaultProps} />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders an overlay for no projects', () => {
    const component = shallow(
      <App projects={[]} />,
    );
    expect(component).toMatchSnapshot();
  });
});
