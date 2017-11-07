import axios from 'axios';
import { serverConfig } from '../config';

export default async function fetch(config = serverConfig) {
  try {
    const { endpoint } = config;

    if (!endpoint) {
      throw new Error('ENDPOINT is not set');
    }

    const res = await axios.get(endpoint);
    return res.data;
  } catch (err) {
    console.error('Upstream error:', err.message);
    throw err;
  }
}
