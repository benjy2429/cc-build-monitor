import axios from 'axios';

export default async function fetch(path, config = process.env) {
  try {
    const {
      CIRCLE_ENDPOINT: endpoint,
      CIRCLE_TOKEN: token,
    } = config;


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
