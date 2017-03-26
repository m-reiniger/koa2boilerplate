"use strict";

const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    console.log("incoming request");
    ctx.body = 'Hello World';
});

app.listen(3000);