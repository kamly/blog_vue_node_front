// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import Axios from 'axios'
import VueRouter from 'vue-router'; // 引入router

import articleList from './components/articleList.vue'
import life from './components/life.vue'
import todo from './components/todo.vue'
import articleDetail from './components/articleDetail.vue'

Vue.use(iView);
Vue.prototype.$http = Axios
Vue.use(VueRouter);

// 路由配置
const RouterConfig = [
  {path: '/', name: 'index', component: articleList},
  {path: '/articleDetail/:id', name:'articleDetail', component: articleDetail},
  {path: '/life', name:'life', component: life},
  {path: '/todo', name:'todo', component: todo},
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
