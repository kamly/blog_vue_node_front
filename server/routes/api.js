/**
 * Created by kamlyli on 2017/8/20.
 */


const Router = require('koa-router');
const childRouter = new Router();


const ArticleController = require('../controllers/v1/article.js');
const WorkController = require('../controllers/v1/work.js');
const TargetController = require('../controllers/v1/target.js');
const LifeController = require('../controllers/v1/life.js');
const IndexController = require('../controllers/index.js');

// 测试 localhost:3000/api/test
childRouter.get('/test', IndexController.test)


// 文章
childRouter.get('/v1/articles', ArticleController.getArticles)
childRouter.get('/v1/article/:id', ArticleController.getArticle)
childRouter.post('/v1/article/pageView/:id', ArticleController.addPageView)

// 作品
childRouter.get('/v1/works', WorkController.getWorks)
childRouter.get('/v1/work/:id', WorkController.getWork)
childRouter.post('/v1/work/pageView/:id', WorkController.addPageView)


// 目标
childRouter.get('/v1/targets', TargetController.getTargets)

// 生活足迹
childRouter.get('/v1/lives', LifeController.getLives)

module.exports = childRouter;

