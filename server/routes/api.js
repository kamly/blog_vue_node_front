/**
 * Created by kamlyli on 2017/8/20.
 */


const Router = require('koa-router');
const childRouter = new Router();


const ArticleController = require('../controllers/v1/article.js');
const IndexController = require('../controllers/index.js');

// 测试 localhost:3000/api/test
childRouter.get('/test', IndexController.test)


// 文章
childRouter.get('/v1/articles', ArticleController.getArticles)
childRouter.get('/v1/article/:id', ArticleController.getArticle)
childRouter.post('/v1/article/pageView/:id', ArticleController.addPageView)

module.exports = childRouter;

