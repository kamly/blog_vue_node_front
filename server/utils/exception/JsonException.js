const util = require('util');

const ERROR_MSG = require('./exceptionMsg')

exports.JsonException = JsonException;

/**
 * json的异常拦截
 * @param status 数字
 * @param code 数字
 * @param msg 文字
 * @constructor
 */
function JsonException(status, msg) {
  Error.call(this, '')

  this.status = status > 10000 ? 200 : status
  this.code = status > 10000 ? status : 0
  this.msg = msg || ERROR_MSG[this.code] || ERROR_MSG[500]

  this.getExceptionMsg = function () {
    return {
      status: this.status,
      code: this.code,
      msg: this.msg
    }
  }
}

// throw new JsonException(10001);
// throw new JsonException(400);
// throw new JsonException(10001, '在xx位置错误');

util.inherits(JsonException, Error);

