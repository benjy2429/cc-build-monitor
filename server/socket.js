import IO from 'socket.io';
import resolve from './resolver';
import mockFetch from './mock-fetch';

const POLL_RATE = parseInt(process.env.POLL_RATE || '30000', 10);

const getData = (config = process.env) => {
  if (config.USE_MOCKS === 'true') {
    return resolve(mockFetch);
  }
  return resolve();
};

export default (server, socketLib = IO) => {
  const io = socketLib(server);

  io.on('connection', async (socket) => {
    socket.emit('monitorData', await getData());
  });

  setInterval(
    async () => {
      const connections = Object.keys(io.sockets.connected).length;
      if (connections) {
        io.sockets.emit('monitorData', await getData());
      }
    },
    POLL_RATE,
  );
};
