import React from 'react';
import { shallow, mount } from 'enzyme';
import Ticker from '../ticker';

describe('Ticker', () => {
  it('formats a duration in seconds', () => {
    const thirtySeconds = 30 * 1000;
    const component = shallow(<Ticker time={thirtySeconds} />);
    expect(component).toMatchSnapshot();
  });

  it('formats a duration in minutes', () => {
    const fiveMinutes = 5 * 60 * 1000;
    const component = shallow(<Ticker time={fiveMinutes} />);
    expect(component).toMatchSnapshot();
  });

  it('formats a duration in hours', () => {
    const oneHour = 60 * 60 * 1000;
    const component = shallow(<Ticker time={oneHour} />);
    expect(component).toMatchSnapshot();
  });

  it('defaults to 0 if no time is specified', () => {
    const component = shallow(<Ticker />);
    expect(component).toMatchSnapshot();
  });

  it('increments the time every second', () => {
    jest.useFakeTimers();
    const component = mount(<Ticker ticking />);
    expect(setInterval.mock.calls.length).toBe(1);
    expect(setInterval.mock.calls[0][1]).toBe(1000);

    jest.runOnlyPendingTimers();
    expect(component).toMatchSnapshot();
  });
});
