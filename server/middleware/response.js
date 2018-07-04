let response = async (ctx, next) => {

  await next();

  if (ctx.body.msg) {
    ctx.status = ctx.body.status || 200
    ctx.body = {
      code: ctx.body.code ? ctx.body.code : 0,
      msg: ctx.body.msg,
    }
  }
}

module.exports = response
