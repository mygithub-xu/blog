import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
var constantRouterMap=[
  {
    path: '/',
    redirect: '/blog/shouye',
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
  },

  // 官网总体样式
  {
    // layout
    path: '/blog',
    component: resolve => require(['@/views/blog/layout/layout.vue'], resolve),
    meta: {
      title: '首页',
    },
    children:[
      {
        path: '/blog/shouye',
        component: resolve => require(['@/views/blog/views/blog/shouye.vue'], resolve),
        meta: {
          title: '首页',
          idj: ''
        },
        name: '首页'
      },
      {
        path: '/blog/biaoqian',
        component: resolve => require(['@/views/blog/views/blog/biaoqian.vue'], resolve),
        meta: {
          title: '标签',
          idj: ''
        },
        name: '标签'
      },
      {
        path: '/blog/guidang',
        component: resolve => require(['@/views/blog/views/blog/guidang.vue'], resolve),
        meta: {
          title: '归档',
          idj: ''
        },
        name: '归档'
      },
      {
        path: '/blog/xiangmu',
        component: resolve => require(['@/views/blog/views/blog/xiangmu.vue'], resolve),
        meta: {
          title: '项目',
          idj: ''
        },
        name: '项目'
      },
      {
        path: '/blog/liuyan',
        component: resolve => require(['@/views/blog/views/blog/liuyan.vue'], resolve),
        meta: {
          title: '留言',
          idj: ''
        },
        name: '留言'
      },
      {
        path: '/blog/guanyu',
        component: resolve => require(['@/views/blog/views/blog/guanyu.vue'], resolve),
        meta: {
          title: '关于',
          idj: ''
        },
        name: '关于'
      },
      {
        path: '/blog/blogContent',
        component: resolve => require(['@/views/blog/views/blog/blogContent.vue'], resolve),
        meta: {
          title: 'blog内容',
          idj: ''
        },
        name: 'blog内容'
      }

    ]
  }
]

export default new Router({
  routes: constantRouterMap
})
