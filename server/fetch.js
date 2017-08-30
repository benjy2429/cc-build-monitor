import axios from 'axios';

export default async function fetch(path, config = process.env) {
  try {
    const {
      CIRCLE_ENDPOINT: endpoint,
      CIRCLE_TOKEN: token,
    } = config;


    if (!endpoint) {
      console.error('CIRCLE_ENDPOINT is not set');
      return [];
    }

    if (!token) {
      console.error('CIRCLE_TOKEN is not set');
      return [];
    }

    const res = await axios.get(`${endpoint}${path}`, {
      params: {
        'circle-token': token,
      },
    });
    return res.data;
  } catch (err) {
    console.error('Upstream error:', err.message);
    return [];
  }
}
