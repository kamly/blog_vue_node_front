/**
 * Created by kamlyli on 2017/8/20.
 */

//koa
const koa = require('koa');
const app = new koa();

//bodyparser
const bodyparser = require('koa-bodyparser')();
//json
const json = require('koa-json');
//logger
const logger = require('koa-logger');
//log工具
const logUtil = require('./server/utils/log');
//router
const Router = require('koa-router');
// 静态资源
const path = require('path')
const serve = require('koa-static');
// 历史记录
const historyApiFallback = require('koa-history-api-fallback');
// 异常拦截
const exception = require('./server/middleware/exception')
// 返回格式
const response = require('./server/middleware/response')

//路由设置
//父路由
const router = new Router();
//引入子路由
const api = require('./server/routes/api.js');

app.use(bodyparser);
app.use(json());
app.use(logger());
app.use(exception)
app.use(response)

app.use(async (ctx, next) => {
  console.log('---已经开始---');
  console.log(`请求方法:${ctx.request.method} | 请求链接:${ctx.request.url}`);
  await next();
  console.log('---准备结束---');
});

app.use(async (ctx, next) => {
  const start = new Date().getTime(); //当前时间
  logUtil.logRequest(ctx);
  await next();
  const ms = new Date().getTime() - start; //耗费时间
  // logUtil.logResponse(ctx, ms);
  console.log(`Time ${ms}ms`);
})

//装载子路由
router.use('/api', api.routes());
//加载路由中间件
app.use(router.routes())
  .use(router.allowedMethods());

// 将这两个中间件挂载在api的路由之后
app.use(historyApiFallback());  // 历史内容
app.use(serve(path.resolve('dist'))); // 将webpack打包好的项目目录作为Koa静态文件服务的目录

app.on('error', function (err, ctx) {
  console.log(err);
});

app.listen(3000, () => {
  console.error('listen 3000');
});

module.exports = app;
