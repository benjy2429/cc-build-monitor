import React from 'react';
import { mount } from 'enzyme';
import loader from '../loader';

const WrappedComponent = () => <div className="wrapped-component" />;
const stubProvider = Promise.resolve({ data: { some: 'data' } });
const LoaderComponent = loader(WrappedComponent, () => stubProvider);

describe('Loader', () => {
  it('renders the spinner initially', () => {
    const component = mount(
      <LoaderComponent />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders the component after receiving data', async () => {
    const component = mount(
      <LoaderComponent />,
    );
    await stubProvider;
    expect(component).toMatchSnapshot();
  });
});
