/**
 * Created by kamlyli on 2017/8/20.
 */

const db = require('../utils/db')
const lifeModel = '../schema/life'

const BlogDB = db.Blog
const Life = BlogDB.import(lifeModel)


// 获取全部生活足迹
const getLives = async function () {
  return await Life.findAll({
    where: {
      state: '0'
    },
    order: [
      ['time', 'DESC'],
    ]
  })
}


module.exports = {
  getLives,
}
