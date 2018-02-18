/**
 * Created by kamlyli on 2017/8/20.
 */


const Router = require('koa-router');
const childRouter = new Router();


const ArticleController = require('../controllers/article.js');
const IndexController = require('../controllers/index.js');

// 测试 localhost:3000/api/test
childRouter.get('/test', IndexController.test)


// 文章
childRouter.get('/articles', ArticleController.getArticles)
childRouter.get('/article/:id', ArticleController.getArticle)

module.exports = childRouter;

