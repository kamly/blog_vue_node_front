const log4js = require('log4js');


//加载配置文件
const log_config = require('../config/log_config');
log4js.configure(log_config);

const logUtil = {};
const errorLogger = log4js.getLogger('errorLogger');
const resLogger = log4js.getLogger('resLogger');
const reqLogger = log4js.getLogger('reqLogger');

//封装错误日志
logUtil.logError = function (ctx, error) {
  if (ctx && error) {
    errorLogger.error(JSON.stringify(formatError(ctx, error)));
  }
};

//封装响应日志
logUtil.logResponse = function (ctx, spendTime) {
  if (ctx) {
    resLogger.info(JSON.stringify(formatRes(ctx, spendTime)));
  }
};

// 封装请求日志
logUtil.logRequest = function (ctx) {
  if (ctx) {
    reqLogger.info(JSON.stringify(formatReqLog(ctx)));
  }
};

//格式化错误日志
const formatError = function (ctx, err) {
  //请求参数
  let query = ctx.query ? ctx.query : []
  let body = ctx.request.body ? ctx.request.body : []
  let logText = {
    'time': new Date().Format("yyyy-MM-dd hh:mm:ss"),
    'originalUrl': ctx.originalUrl, // 请求原始地址
    'clientIp': ctx.ip, // 客户端ip
    'userAgent': ctx.header['user-agent'],
    'method': ctx.method, // 访问方法
    'query': query,
    'body': body,
    'status': ctx.status,
    'code': ctx.body.code,
    'msg': ctx.body.msg,
    'errName': err.name ? err.name : '',
    'errMessage': err.message ? err.message : '',
    'errStack': err.stack ? err.stack : '',
  }
  return logText;
}

//格式化响应日志
const formatRes = function (ctx, spendTime) {
  //请求参数
  let query = ctx.query ? ctx.query : []
  let body = ctx.request.body ? ctx.request.body : []
  let logText = {
    'time': new Date().Format("yyyy-MM-dd hh:mm:ss"),
    'originalUrl': ctx.originalUrl, // 请求原始地址
    'clientIp': ctx.ip, // 客户端ip
    'userAgent': ctx.header['user-agent'],
    'method': ctx.method, // 访问方法
    'query': query,
    'body': body,
    'status': ctx.status,
    'code': ctx.body.code,
    'msg': ctx.body.msg,
    'spendTime': `${spendTime}ms`
  }
  return logText;
}

// 格式化请求日志
const formatReqLog = function (req) {
  //请求参数
  let query = req.query ? req.query : []
  let body = req.request.body ? req.request.body : []

  let logText = {
    'time': new Date().Format("yyyy-MM-dd hh:mm:ss"),
    'originalUrl': req.originalUrl, // 请求原始地址
    'clientIp': req.ip, // 客户端ip
    'userAgent': req.header['user-agent'],
    'method': req.method, // 访问方法
    'query': query,
    'body': body,
  }
  return logText;
}


// 扩展date
Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

module.exports = logUtil;


