const config = require('../config/config')
const {JsonException} = require('../utils/exception/JsonException')
//log工具
const logUtil = require('../utils/log');

const exception = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    if (e instanceof JsonException) {
      // 人为定义
      // 直接返回json
      const {status, code, msg} = e.getExceptionMsg()
      ctx.status = status
      ctx.body = {
        code: code,
        msg: msg
      }
    } else {
      ctx.status = 500
      // 内部错误
      if (config.debug) {
        // 调试模式，打印错误原因
        ctx.body = {
          code: 500,
          msg: {
            name: e.name,
            message: e.message,
            stack: e.stack,
          }
        }
      } else {
        // 返回服务器错误
        ctx.body = {
          code: 500,
          msg: '服务器内部错误'
        }
      }
      ctx.app.emit('error', e, ctx); // 必须调用ctx.app.emit(),手动释放error事件，才能让监听函数生效
    }
    // logUtil.logError(ctx, e);
  }
}

module.exports = exception;
