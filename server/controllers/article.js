/**
 * Created by kamlyli on 2017/8/20.
 */


const Article = require('../models/article')

const getArticles = async (ctx) => {
  let articles = await Article.getArticles()
  ctx.body = {
    articles,
    success: true,
  }
}

const getArticle = async (ctx) => {
  // console.log(ctx.params.id)  ctx.body.request
  let id = ctx.params.id || '1';
  let article = await Article.getArticle(id)
  if(article === undefined){
    ctx.body = {
      success: false
    }
  }
  ctx.body = {
    article,
    success: true
  }
}

module.exports = {
  getArticles,
  getArticle,
}
