import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../summary';

const defaultProps = {
  projects: [
    { name: 'org/project-1' },
    { name: 'org/project-2' },
  ],
  category: 'passing',
};

describe('Summary', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Summary {...defaultProps} />,
    );

    expect(component).toMatchSnapshot();
  });
});
