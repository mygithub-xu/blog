// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App'

//全局组件
import globalComponents from '@comp/index';

//传值
import store from './store/index'

//图标

import './icons' // 自定义图标
import '@static/style.css'//图标样式

//阿里图标
import './assets/css/iconfont.css'

//默认样式
import '@static/css/reset.css'//覆盖浏览器默认样式
import '@static/css/style.css'//自定义全局样式

import '@/plugins/element'
import '@/plugins/axios'
import '@/plugins/echarts'

//quill富文本样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

//全局api接口
import api from "./api/api-config";//这里规定统一一个页面放入后台接口
Vue.prototype.api = api;//全局使用api
Vue.config.productionTip = false

// 安装路由
Vue.use(VueRouter);

//全局组件
Vue.use(globalComponents);

    //按钮根据权限显示和影藏
    Vue.directive('has', {
      inserted: function (el, binding) {
        if (!permissionJudge(binding.value)) {
          el.parentNode.removeChild(el);
        }
    
        function permissionJudge(value) {
          let list = JSON.parse(sessionStorage.getItem('buttonUrlList'));
          if(!list){
            return false;
          }
          for (let i=0;i<list.length;i++) {
            if (list[i] === value) {
              return true;
            }
          }
          return false;
        }
      }
    });


  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 启用路由
  router,
  //启用状态管理
  store,
  // 启用 ElementUI
  render: h => h(App)
});