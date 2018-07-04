/**
 * Created by kamlyli on 2017/8/20.
 */

const db = require('../utils/db')
const targetModel = '../schema/target'

const BlogDB = db.Blog
const Target = BlogDB.import(targetModel)


// 获取全部目标
const getTargets = async function () {
  return await Target.findAll({
    where: {
      state: '0'
    }
  })
}


module.exports = {
  getTargets,
}
