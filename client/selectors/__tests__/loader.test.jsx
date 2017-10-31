import React from 'react';
import { mount } from 'enzyme';
import loader from '../loader';

const WrappedComponent = () => <div className="wrapped-component" />;
const defaultStubFetch = () => Promise.resolve({ data: { some: 'data' } });

const renderLoader = (stubFetch = defaultStubFetch) => {
  const LoaderComponent = loader(WrappedComponent, stubFetch);
  return mount(<LoaderComponent />);
};

describe('Loader', () => {
  it('renders the spinner initially', () => {
    const component = renderLoader();
    expect(component).toMatchSnapshot();
  });

  it('renders the component after receiving data', async () => {
    const component = renderLoader();
    await defaultStubFetch;
    expect(component).toMatchSnapshot();
  });

  it('renders the component and spinner when re-fetching', async () => {
    jest.useFakeTimers();
    const component = renderLoader();
    await defaultStubFetch;
    jest.runOnlyPendingTimers();
    expect(component).toMatchSnapshot();
  });

  it('renders an overlay for received errors', async () => {
    const stubFetch = () => Promise.resolve({ data: { error: 'received error' } });
    const component = renderLoader(stubFetch);
    await stubFetch;
    expect(component).toMatchSnapshot();
  });

  it('renders an overlay for fetch errors', async () => {
    const stubFetch = () => { throw new Error('fetch error'); };
    const component = renderLoader(stubFetch);
    await stubFetch;
    expect(component).toMatchSnapshot();
  });
});
