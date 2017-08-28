import React from 'react';
import { shallow } from 'enzyme';
import Build from '../build';

const defaultProps = {
  reponame: 'my-project',
  branch: 'master',
  build_num: 123,
  status: 'success',
  build_time_millis: 5000,
  user: {
    name: 'Joe Bloggs',
    avatar_url: 'https://example.com/image.png',
  },
};

describe('Build', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Build {...defaultProps} />,
    );

    expect(component).toMatchSnapshot();
  });

  it('displays the build time when running', () => {
    const props = {
      ...defaultProps,
      status: 'running',
    };
    const component = shallow(
      <Build {...props} />,
    );

    expect(component).toMatchSnapshot();
  });

  it('hides the time if it is not in the props', () => {
    const props = {
      ...defaultProps,
      build_time_millis: undefined,
    };
    const component = shallow(
      <Build {...props} />,
    );

    expect(component).toMatchSnapshot();
  });

  it('displays unknown if the status is does not have a friendly name', () => {
    const props = {
      ...defaultProps,
      status: 'something_else',
    };
    const component = shallow(
      <Build {...props} />,
    );

    expect(component).toMatchSnapshot();
  });
});
