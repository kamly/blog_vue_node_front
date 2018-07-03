/**
 * Created by kamlyli on 2017/8/20.
 */


const Work = require('../../models/work')
const {JsonException} = require('../../utils/exception/JsonException')


/**
 * 获取全部作品
 * @param ctx
 * @returns {Promise.<void>}
 */
const getWorks = async (ctx) => {
  let works = await Work.getWorks()
  ctx.body = {
    msg: works,
  }
}

/**
 * 获取指定id作品
 * @param ctx
 * @returns {Promise.<void>}
 */
const getWork = async (ctx) => {
  // console.log(ctx.params.id)  ctx.body.request
  let id = ctx.params.id || '';
  if (id === '') {
  }
  let work = await Work.getWork(id)
  if (work === undefined) {
  }
  ctx.body = {
    msg: work,
  }
}

/**
 * 增加阅读量
 * @param ctx
 * @returns {Promise.<void>}
 */
const addPageView = async (ctx) => {
  // console.log(ctx.params.id)  ctx.body.request
  let id = ctx.params.id || '';
  if (id === '') {
  }
  let work = await Work.getWork(id)
  if (work === undefined) {
  }
  // add
  work = await Work.addPageView(id)
  if (work) {
    ctx.body = {
      msg: work,
    }
  }
}

module.exports = {
  getWork,
  getWorks,
  addPageView,
}
