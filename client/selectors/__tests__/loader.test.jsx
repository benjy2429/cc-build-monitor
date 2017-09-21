import React from 'react';
import { mount } from 'enzyme';
import io from 'socket.io-client';
import loader from '../loader';

const WrappedComponent = () => <div className="wrapped-component" />;
const stubProvider = Promise.resolve({ some: 'data' });
const LoaderComponent = loader(WrappedComponent, () => stubProvider);

describe('Loader', () => {
  let onMessage;

  beforeEach(() => {
    io.connect = jest.fn().mockReturnValue({
      on: (event, cb) => { onMessage = cb; },
    });
  });

  afterEach(() => {
    if (jest.isMockFunction(io.connect)) {
      io.connect.mockReset();
    }
  });

  it('renders the spinner initially', () => {
    const component = mount(
      <LoaderComponent />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders the component after receiving data', () => {
    const component = mount(
      <LoaderComponent />,
    );
    onMessage(JSON.stringify({ some: 'data' }));
    expect(component).toMatchSnapshot();
  });
});
