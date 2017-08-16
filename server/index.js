import IO from 'socket.io';
import http from 'http';
import Koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import logger from 'koa-logger';
import webpack from 'koa-webpack';
import webpackConfig from '../webpack.config';

const port = 3000;
const app = new Koa();

app.use(logger());

if (process.env.NODE_ENV === 'production') {
  app.use(mount('/', serve('dist')));
} else {
  app.use(webpack({
    config: webpackConfig,
    dev: {
      publicPath: '/',
    },
  }));
}

const server = http.Server(app.callback());
const io = IO(server);

io.on('connection', () => {
  console.log('connected!');
  io.emit('message', 'You got my message!');
});

server.listen(port);
// eslint-disable-next-line no-console
console.log(`App running on http://localhost:${port}`);
