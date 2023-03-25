const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
  ctx.body = 'Hello World';
});

app.listen(3000); 