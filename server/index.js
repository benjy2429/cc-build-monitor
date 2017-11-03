import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import logger from 'koa-logger';
import webpack from 'koa-webpack';
import webpackConfig from '../webpack.dev';
import resolve from './resolver';
import index from './views/index';

const port = process.env.PORT || 3000;
const app = new Koa();

app.use(logger());

if (process.env.NODE_ENV === 'production') {
  app.use(mount('/assets', serve(path.join(__dirname, 'assets'))));
} else {
  app.use(webpack({
    config: webpackConfig,
  }));
}

app.use(async (ctx) => {
  if (ctx.path === '/') {
    ctx.body = index;
  } else if (ctx.path === '/fetch') {
    ctx.body = await resolve();
  }
});

app.listen(port);

// eslint-disable-next-line no-console
console.log(`App running on http://localhost:${port}`);
