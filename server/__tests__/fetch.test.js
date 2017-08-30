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
    const result = await fetch('/', {});
    expect(result).toEqual([]);
  });

  it('returns an empty array when the token is missing', async () => {
    const result = await fetch('/', { CIRCLE_ENDPOINT: 'endpoint' });
    expect(result).toEqual([]);
  });

  it('sets the path and token for the request', async () => {
    axios.get = jest.fn(() => Promise.resolve());
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

  it('returns an empty array if the request fails', async () => {
    axios.get = jest.fn(() => Promise.reject('error'));
    const result = await fetch('/', defaultConfig);
    expect(result).toEqual([]);
  });
});
