import React from 'react';
import { shallow, mount } from 'enzyme';
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

  it('does not render with no projects', () => {
    const component = shallow(
      <Summary projects={[]} />,
    );

    expect(component.html()).toEqual(null);
  });

  it('displays the second project after a timeout', () => {
    jest.useFakeTimers();
    const component = mount(
      <Summary {...defaultProps} />,
    );
    jest.runOnlyPendingTimers();
    expect(component).toMatchSnapshot();
  });

  it('loops back to the first project', () => {
    jest.useFakeTimers();
    const component = mount(
      <Summary {...defaultProps} />,
    );
    jest.runOnlyPendingTimers();
    jest.runOnlyPendingTimers();
    expect(component).toMatchSnapshot();
  });

  it('strips the org when specified', () => {
    config.stripOrgs = true;
    const component = shallow(
      <Summary {...defaultProps} />,
    );

    expect(component).toMatchSnapshot();
  });
});

