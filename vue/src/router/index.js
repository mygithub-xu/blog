import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({

  mode: 'history',
  
  routes: [
    {
      path: '/',
      redirect: '/guanwang/shouye',
      name: '首页'
    },
  
    {
      path: '*',
      redirect: '/page/404',
      name: '404'
    },
  
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve),
      name: '登录'
    },

    // 官网总体样式
    {
      // layout
      path: '/guanwang',
      component: resolve => require(['../views/guanwang/layout/layout.vue'], resolve),
      meta: {
        title: '首页',
      },
      children:[
        {
          path: '/guanwang/shouye',
          component: resolve => require(['../views/guanwang/views/blog/shouye.vue'], resolve),
          meta: {
            title: '首页',
            idj: ''
          },
          name: '首页'
        },
        {
          path: '/guanwang/biaoqian',
          component: resolve => require(['../views/guanwang/views/blog/biaoqian.vue'], resolve),
          meta: {
            title: '标签',
            idj: ''
          },
          name: '标签'
        },
        {
          path: '/guanwang/guidang',
          component: resolve => require(['../views/guanwang/views/blog/guidang.vue'], resolve),
          meta: {
            title: '归档',
            idj: ''
          },
          name: '归档'
        },
        {
          path: '/guanwang/xiangmu',
          component: resolve => require(['../views/guanwang/views/blog/xiangmu.vue'], resolve),
          meta: {
            title: '项目',
            idj: ''
          },
          name: '项目'
        },
        {
          path: '/guanwang/liuyan',
          component: resolve => require(['../views/guanwang/views/blog/liuyan.vue'], resolve),
          meta: {
            title: '留言',
            idj: ''
          },
          name: '留言'
        },
        {
          path: '/guanwang/guanyu',
          component: resolve => require(['../views/guanwang/views/blog/guanyu.vue'], resolve),
          meta: {
            title: '关于',
            idj: ''
          },
          name: '关于'
        },
        {
          path: '/guanwang/blogContent',
          component: resolve => require(['../views/guanwang/views/blog/blogContent.vue'], resolve),
          meta: {
            title: 'blog内容',
            idj: ''
          },
          name: 'blog内容'
        },
  
      ]
    },
  
  
    {
      path: '/Layout',
      component: resolve => require(['../components/layout/Layout.vue'], resolve),
      meta: {
        title: '首页'
      },
      children:[
      {
        path: '/page/Dashboard',
        component: resolve => require(['../components/page/Dashboard.vue'], resolve),
        meta: {
          title: '系统首页',
          idj: ''
        },
        name: '首页'
      },
      //系统配置---start
      {
        path: '/page/user',
        component: resolve => require(['../components/page/user.vue'], resolve),
        meta: {
          title: '管理员登入记录',
          idj: ''
        },
        name: '管理员登入记录'
      },
      //系统配置---start
      {
        path: '/views/system/sysFiles/sysFilesList',
        component: resolve => require(['../views/system/sysFiles/sysFilesList'], resolve),
        meta: {
          title: '文件上传',
          idj: ''
        },
        name: '文件上传'
      },
      
      {
        // 菜单配置
        path: '/views/system/sysMenu/sysMenuList',
        component: resolve => require(['../views/system/sysMenu/sysMenuList.vue'], resolve),
        meta: {
          title: '菜单配置',
          permission: false,
          idj: ''
        },
        name: '菜单配置'
      },
  
      {
        // 权限管理---角色管理
        path: '/views/system/sysPrivilege/sysRole/sysroleList',
        component: resolve => require(['../views/system/sysPrivilege/sysRole/sysRoleList.vue'], resolve),
        meta: {
          title: '角色管理',
          permission: false,
          idj: ''
        },
        name: '角色管理'
      },
  
      {
        // 权限管理---账号管理
        path: '/views/system/sysPrivilege/sysUser/sysUserList',
        component: resolve => require(['../views/system/sysPrivilege/sysUser/sysUserList.vue'], resolve),
        meta: {
          title: '账号管理',
          permission: false,
          idj: ''
        },
        name: '账号管理'
      },
  
      {
        // 全局参数---字典管理
        path: '/views/system/sysParameter/sysDic/sysDicList',
        component: resolve => require(['../views/system/sysParameter/sysDic/sysDicList.vue'], resolve),
        meta: {
          title: '字典管理',
          permission: false,
          idj: ''
        },
        name: '字典管理'
      },
      {
        // 全局参数---按钮配置
        path: '/views/system/sysParameter/sysBut/sysButList',
        component: resolve => require(['../views/system/sysParameter/sysBut/sysButList.vue'], resolve),
        meta: {
          title: '按钮配置',
          permission: false,
          idj: ''
        },
        name: '按钮管理'
      },
  
      //基本信息---start
      {
        // 登入日志
        path: '/views/system/syslog/sysLoginLog',
        component: resolve => require(['../views/system/syslog/sysLoginLog.vue'], resolve),
        meta: {
          title: '登入日志',
          permission: false,
          idj: ''
        },
        name: '登入日志'
      },
      //基本信息---end
      
      //基本信息---start
      {
        // 个人中心
        path: '/views/user/userinfo',
        component: resolve => require(['../views/system/sysPrivilege/sysUser/modifyInformation.vue'], resolve),
        meta: {
          title: '个人中心',
          permission: false,
          idj: ''
        },
        name: '个人中心'
      },
      //基本信息---end
          
      //系统配置---end
      {
        path: '/page/404',
        component: resolve => require(['../components/page/404.vue'], resolve),
        meta: {
          title: '404',
          idj: ''
        },
        name: '404'
      },
    //blog后台--start
    {
      path: '/guanwang/ht/blogBlog',
      component: resolve => require(['../views/guanwang/views/ht/blogBlog/blogBlogList.vue'], resolve),
      meta: {
        title: 'blog文章',
        idj: ''
      },
      name: 'blog文章'
    },

    {
      path: '/guanwang/ht/blogProject',
      component: resolve => require(['../views/guanwang/views/ht/blogProject/blogProjectList.vue'], resolve),
      meta: {
        title: 'blog项目',
        idj: ''
      },
      name: 'blog项目'
    },
    //blog后台--end


    ]
    }
    
  ]
  
  })

export default router;

// export default new Router({
//   routes:[



// ]
// })
