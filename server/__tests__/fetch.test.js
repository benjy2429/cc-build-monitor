import axios from 'axios';
import fetch from '../fetch';

const defaultConfig = {
  endpoint: 'endpoint',
};

describe('Fetch', () => {
  afterEach(() => {
    if (jest.isMockFunction(axios.get)) {
      axios.get.mockReset();
    }
  });

  it('returns an empty array when the endpoint is missing', async () => {
    await expect(fetch()).rejects.toHaveProperty(
      'message',
      'ENDPOINT is not set',
    );
  });

  it('sets the path and token for the request', async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: '' }));
    await fetch(defaultConfig);
    expect(axios.get.mock.calls[0][0]).toEqual('endpoint');
  });

  it('returns data', async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: 'data' }));
    const result = await fetch(defaultConfig);
    expect(result).toEqual('data');
  });

  it('throws an error if the request fails', async () => {
    axios.get = jest.fn(() => Promise.reject(Error('an error message')));
    await expect(fetch(defaultConfig)).rejects.toHaveProperty(
      'message',
      'an error message',
    );
  });
});
