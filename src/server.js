import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import mount from 'koa-mount';
import logger from 'koa-logger';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/app.jsx';

const app = new Koa();
const port = 3000;
const router = Router();

app.use(logger());

app.use(mount('/assets', serve('src/public')));

router.get('/', async ctx => {
    ctx.body = ReactDOMServer.renderToString(<App />);
});

app.use(router.routes());

app.listen(port);
console.log(`App running on http://localhost:${port}`);
