import Koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import logger from 'koa-logger';
import webpack from 'koa-webpack';
import webpackConfig from '../webpack.config';
import resolve from './resolver';
import mockFetch from './mock-fetch';

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

app.use(async (ctx) => {
  if (ctx.path === '/fetch') {
    if (process.env.USE_MOCKS === 'true') {
      ctx.body = await resolve(mockFetch);
    }
    ctx.body = await resolve();
  }
});

app.listen(port);
// eslint-disable-next-line no-console
console.log(`App running on http://localhost:${port}`);
