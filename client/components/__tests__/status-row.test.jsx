import React from 'react';
import { shallow } from 'enzyme';
import StatusRow from '../status-row';

const defaultProps = {
  projects: [
    {
      buildStatus: 'Failure',
      activity: 'Sleeping',
      name: 'org/project-1',
    },
    {
      buildStatus: 'Failure',
      activity: 'Sleeping',
      name: 'org/project-2',
    },
  ],
  status: 'Failing',
};

describe('Status row', () => {
  it('renders correctly', () => {
    const component = shallow(
      <StatusRow {...defaultProps} />,
    );

    expect(component).toMatchSnapshot();
  });
});
