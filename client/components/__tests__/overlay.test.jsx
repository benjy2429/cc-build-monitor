import React from 'react';
import { shallow } from 'enzyme';
import Overlay from '../overlay';

const defaultProps = {
  title: 'The title',
  subtitle: 'The subtitle',
};

describe('Overlay', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Overlay {...defaultProps} />,
    );
    expect(component).toMatchSnapshot();
  });
});
