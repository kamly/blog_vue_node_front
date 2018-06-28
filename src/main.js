// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import Axios from 'axios'
import VueRouter from 'vue-router'; // 引入router

import articleList from './components/articleList.vue'
import articleDetail from './components/articleDetail.vue'
import about from './components/about.vue'
import life from './components/life.vue'
import todo from './components/todo.vue'
import workList from './components/workList.vue'
import workDetail from './components/workDetail.vue'

Vue.use(iView);
Vue.prototype.$http = Axios
Vue.use(VueRouter);

// 路由配置
const RouterConfig = [
  {path: '/', name: 'index', component: articleList}, // 文章
  {path: '/articleDetail/:id', name:'articleDetail', component: articleDetail}, // 具体文章
  {path: '/about', name:'about', component: about}, // 关于
  {path: '/life', name:'life', component: life}, // 生活
  {path: '/todo', name:'todo', component: todo}, // 准备
  {path: '/workList', name:'workList', component: workList}, // 作品
  {path: '/workDetail/:id', name:'workDetail', component: workDetail}, // 具体作品
];

const router = new VueRouter({
  routes:RouterConfig,
});


/* eslint-disable no-new */
const app = new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

router.push('/');
