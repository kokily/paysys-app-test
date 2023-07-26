const fs = require('fs');
const https = require('https');
const Koa = require('koa');
const { default: enforceHTTPS } = require('koa-sslify');
const { createServer } = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(enforceHTTPS({ port: 443 }));

  const httpServer = createServer(server.callback());

  const options = {
    key: fs.readFileSync(`${process.env.SSL_KEY}`),
    cert: fs.readFileSync(`${process.env.SSL_CERT}`),
  };

  const httpsServer = https.createServer(options, server.callback());

  httpServer.listen(80);
  httpsServer.listen(443, (err) => {
    if (err) throw err;
    console.log('> HTTPS server running on https://paysys.kr');
  });
});
