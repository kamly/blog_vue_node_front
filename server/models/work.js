/**
 * Created by kamlyli on 2017/8/20.
 */

const db = require('../utils/db')
const workModel = '../schema/work'

const BlogDB = db.Blog
const Work = BlogDB.import(workModel)


// 获取全部作品
const getWorks = async function () {
  return await Work.findAll({
    where: {
      state: '0'
    }
  })
}


// 通过Id获取作品内容
const getWork = async function (id) {
  return await Work.findOne({
    where: {
      id: id,
      state: '0'
    }
  })
}

// 通过Id增加阅读量
const addPageView = async function (id) {
  let work = await Work.findOne({
    where: {
      id: id,
      state: '0'
    }
  })
  return await work.update({
    pageview: work.pageview + 1
  })
}

module.exports = {
  getWorks,
  getWork,
  addPageView,
}
