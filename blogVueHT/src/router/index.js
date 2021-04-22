import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
var constantRouterMap=[
  {
    path: '/',
    redirect: '/login',
    name: '首页'
  },

  {
    path: '/404',
    redirect: '/page/404',
    name: '404'
  },
  {
    path: '/login',
    component: resolve => require(['@/components/layout/page/Login.vue'], resolve),
    name: '登录'
  }
]

export default new Router({
  routes: constantRouterMap
})
