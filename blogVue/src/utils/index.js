import Vue from 'vue'

//自定义指令
import preventReClick from '@/utils/common/preventReClick'//暴露https;
Vue.use(preventReClick)

//全局组件
import globalComponents from '@/components/index'
Vue.use(globalComponents)

//全局api接口
import api from "@/api/api-config";//这里规定统一一个页面放入后台接口
Vue.prototype.api = api;//全局使用api


//操作数组，转化类型等等，，工具类
import utils from "@/utils/common/utils"
Vue.prototype.$utils = utils;