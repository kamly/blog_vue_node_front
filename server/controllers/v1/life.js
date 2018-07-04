/**
 * Created by kamlyli on 2017/8/20.
 */

const common = require('../../utils/common')
const Life = require('../../models/life')
const {JsonException} = require('../../utils/exception/JsonException')


/**
 * 获取全部生活足迹
 * @param ctx
 * @returns {Promise.<void>}
 */
const getLives = async (ctx) => {
  let lives = await Life.getLives()
  lives.forEach(function (item) {
    item.dataValues.time = common.convertUTCTimeToLocalTime(item.dataValues.time, 'yyyy年MM月dd日')
  })
  ctx.body = {
    msg: lives,
  }
}


module.exports = {
  getLives,
}
