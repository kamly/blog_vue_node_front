/**
 * utc转换指定格式
 * @param UTCDateString
 * @param fmt
 * @returns {*}
 * demo
 * convertUTCTimeToLocalTime('2018-07-13T10:00:30.000Z', "yyyy-MM-dd hh:mm:ss")
 */
function convertUTCTimeToLocalTime(UTCDateString, fmt) {
  let date = new Date(UTCDateString);     //这步是关键
  let o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}



module.exports = {
  convertUTCTimeToLocalTime
}
