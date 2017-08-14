import React from 'react';
import { shallow } from 'enzyme';
import { UnwrappedApp as App } from '../app';

const defaultProps = {
  data: [
    { name: 'project1' },
    { name: 'project2' },
  ],
};

describe('Loader', () => {
  it('renders correctly', () => {
    const component = shallow(
      <App {...defaultProps} />,
    );
    expect(component).toMatchSnapshot();
  });
});
