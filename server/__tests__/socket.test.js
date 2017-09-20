import socket from '../socket';
import resolve from '../resolver';

describe('Socket', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    resolve.default = jest.fn().mockReturnValue({ projects: [], builds: [] });
  });

  it('initialises the socket library with the server', () => {
    const mockLib = jest.fn().mockReturnValue({ on: () => {} });

    socket('some-server', mockLib);
    expect(mockLib.mock.calls.length).toBe(1);
    expect(mockLib.mock.calls[0][0]).toBe('some-server');
  });

  it('emits data when a new client connects', async () => {
    let onConn;
    const mockSocket = { emit: jest.fn() };
    const mockLib = {
      on: (event, cb) => { onConn = cb; },
    };

    socket(null, () => mockLib);
    await onConn(mockSocket);
    expect(mockSocket.emit.mock.calls.length).toBe(1);
    expect(mockSocket.emit.mock.calls[0][0]).toBe('monitorData');
    expect(JSON.parse(mockSocket.emit.mock.calls[0][1])).toMatchSnapshot();
  });

  it('emits data on a timer', async () => {
    global.setInterval = jest.fn();
    const mockEmit = jest.fn();
    const mockLib = {
      on: () => {},
      sockets: {
        connected: [1],
        emit: mockEmit,
      },
    };

    socket(null, () => mockLib);
    expect(setInterval.mock.calls.length).toBe(1);

    await setInterval.mock.calls[0][0]();
    expect(mockEmit.mock.calls.length).toBe(1);
    expect(mockEmit.mock.calls[0][0]).toBe('monitorData');
    expect(JSON.parse(mockEmit.mock.calls[0][1])).toMatchSnapshot();
  });

  it('does not emit data if no clients are connected', async () => {
    global.setInterval = jest.fn();
    const mockEmit = jest.fn();
    const mockLib = {
      on: () => {},
      sockets: {
        connected: [],
        emit: mockEmit,
      },
    };

    socket(null, () => mockLib);
    await setInterval.mock.calls[0][0]();
    expect(mockEmit.mock.calls.length).toBe(0);
  });
});
