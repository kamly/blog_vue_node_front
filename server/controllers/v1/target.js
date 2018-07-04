/**
 * Created by kamlyli on 2017/8/20.
 */


const Target = require('../../models/target')
const {JsonException} = require('../../utils/exception/JsonException')


/**
 * 获取全部目标
 * @param ctx
 * @returns {Promise.<void>}
 */
const getTargets = async (ctx) => {
  let targets = await Target.getTargets()

  // 处理数据  type数据分类 dataValues
  let map = {}
  let result = []
  for (let i = 0; i < targets.length; i++) {
    let ai = targets[i];
    if (!map[ai.time]) {
      result.push({
        time: ai.time,
        data: [ai]
      });
      map[ai.time] = ai
    } else {
      // 插入到哪个位置
      for (let j = 0; j < result.length; j++) {
        let dj = result[j]
        if (dj.time === ai.time) {
          dj.data.push(ai)
          break
        }
      }
    }
  }
  // 返回数据
  ctx.body = {
    msg: result,
  }
}


module.exports = {
  getTargets,
}
