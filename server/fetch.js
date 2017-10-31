import axios from 'axios';
import config from '../config';

export default async function fetch(path, apiConfig = config) {
  try {
    const { endpoint, token } = apiConfig;

    if (!endpoint) {
      throw new Error('CIRCLE_ENDPOINT is not set');
    }

    if (!token) {
      throw new Error('CIRCLE_TOKEN is not set');
    }

    const res = await axios.get(`${endpoint}${path}`, {
      params: {
        'circle-token': token,
      },
    });
    return res.data;
  } catch (err) {
    console.error('Upstream error:', err.message);
    throw err;
  }
}
