/**
 * Created by kamlyli on 2017/8/20.
 */

const db = require('../utils/db')
const articleModel = '../schema/article'

const BlogDB = db.Blog
const Article = BlogDB.import(articleModel)


// 获取全部文章
const getArticles = async function () {
  return await Article.findAll({
    where: {
      state: '0'
    }
  })
}


// 通过Id获取文章内容
const getArticle = async function (id) {
  const article = await Article.findOne({
    where: {
      id: id,
      state: '0'
    }
  })
  return article
}

// 通过Id增加阅读量
const addPageView = async function (id) {
  let article = await Article.findOne({
    where: {
      id: id,
      state: '0'
    }
  })
  article = await article.update({
    pageview: article.pageview + 1
  })
  return article
}

module.exports = {
  getArticles,
  getArticle,
  addPageView,
}
