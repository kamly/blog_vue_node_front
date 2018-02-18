/**
 * Created by kamlyli on 2017/8/20.
 */

const db = require('../config/db')
const articleModel = '../schema/blog_article'

const BlogDB = db.Blog
const Article = BlogDB.import(articleModel)


// 获取全部文章
const getArticles = async function () {
  return await Article.findAll()
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

module.exports = {
  getArticles,
  getArticle
}
