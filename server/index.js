import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import mount from 'koa-mount';
import logger from 'koa-logger';

const app = new Koa();
const port = 3000;

app.use(logger());

app.use(mount('/', serve('dist')));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
