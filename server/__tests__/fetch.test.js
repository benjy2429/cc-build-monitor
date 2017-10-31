import axios from 'axios';
import fetch from '../fetch';

const defaultConfig = {
  CIRCLE_ENDPOINT: 'endpoint',
  CIRCLE_TOKEN: 'token',
};

describe('Fetch', () => {
  afterEach(() => {
    if (jest.isMockFunction(axios.get)) {
      axios.get.mockReset();
    }
  });

  it('returns an empty array when the endpoint is missing', async () => {
    await expect(fetch('/', {})).rejects.toHaveProperty(
      'message',
      'CIRCLE_ENDPOINT is not set',
    );
  });

  it('returns an empty array when the token is missing', async () => {
    await expect(
      fetch('/', { CIRCLE_ENDPOINT: 'endpoint' }),
    ).rejects.toHaveProperty(
      'message',
      'CIRCLE_TOKEN is not set',
    );
  });

  it('sets the path and token for the request', async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: '' }));
    await fetch('/', defaultConfig);
    expect(axios.get.mock.calls[0][0]).toEqual('endpoint/');
    expect(axios.get.mock.calls[0][1]).toEqual({
      params: {
        'circle-token': 'token',
      },
    });
  });

  it('returns data', async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: 'data' }));
    const result = await fetch('/', defaultConfig);
    expect(result).toEqual('data');
  });

  it('throws an error if the request fails', async () => {
    axios.get = jest.fn(() => Promise.reject(Error('an error message')));
    await expect(fetch('/', defaultConfig)).rejects.toHaveProperty(
      'message',
      'an error message',
    );
  });
});
