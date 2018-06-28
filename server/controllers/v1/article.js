/**
 * Created by kamlyli on 2017/8/20.
 */


const Article = require('../../models/article')
const {JsonException} = require('../../utils/exception/JsonException')


/**
 * 获取全部文章
 * @param ctx
 * @returns {Promise.<void>}
 */
const getArticles = async (ctx) => {
  let articles = await Article.getArticles()
  ctx.body = {
    msg: articles,
  }
}

/**
 * 获取指定id文章
 * @param ctx
 * @returns {Promise.<void>}
 */
const getArticle = async (ctx) => {
  // console.log(ctx.params.id)  ctx.body.request
  let id = ctx.params.id || '';
  if (id === '') {

  }
  let article = await Article.getArticle(id)
  if (article === undefined) {

  }
  ctx.body = {
    msg: article,
  }
}

/**
 * 增加阅读量
 * @param ctx
 * @returns {Promise.<void>}
 */
const addPageView = async (ctx) => {
  // throw new JsonException(10001);
  // throw new JsonException(400);
  // throw new JsonException(10001, '在xx位置错误');
  // // console.log(ctx.params.id)  ctx.body.request
  // let id = ctx.params.id || '';
  // if (id === '') {
  //   ctx.body = {
  //     success: false
  //   }
  //   return
  // }
  // let article = await Article.getArticle(id)
  // if(article === undefined){
  //   ctx.body = {
  //     success: false
  //   }
  // }
  // // add
  // article = await Article.addPageView(id)
  // if(article === undefined){
  //   ctx.body = {
  //     success: false
  //   }
  //   return
  // }
}

module.exports = {
  getArticles,
  getArticle,
  addPageView,
}
