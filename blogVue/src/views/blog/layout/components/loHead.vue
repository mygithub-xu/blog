<template>
      <div class="lo-dh">
        <template v-if="isMobile">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="icon iconfont icon-zhedie1"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in routerList" :key="item.index" divided :command="item.index">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="lo-welcome">欢迎啊~</span>
        </template>
        <template v-else>
          <div class="lo-avatar">
                <img class="lo-dh-img" :src="imgSrc"/>
          </div>
          <div class="lo-menu">
            <div class="lo-menu-item">
              <el-menu :default-active="activeIndex" mode="horizontal" unique-opened router>
                <el-menu-item v-for="item in routerList" :key="item.index" :index="item.index" >{{item.name}}</el-menu-item>
                <el-menu-item >
                  <div class="el-icon-position" @click="goto"></div>
                </el-menu-item>
              </el-menu>
            </div>
          </div>
        </template>
      </div>
</template>
<script>
export default {
  name:"loHead",
    data() {
      return {
        avatar:"",
        activeIndex: '/blog/shouye',
        routerList:[
          {index:'/blog/shouye',name:'首页'},
          {index:'/blog/biaoqian',name:'标签'},
          {index:'/blog/guidang',name:'归档'},
          {index:'/blog/xiangmu',name:'项目'},
          {index:'/blog/liuyan',name:'留言'},
          {index:'/blog/guanyu',name:'我的'},
        ],
        drawerStatus: false,
        imgSrc: "https://www.whfch.icu/resources/avatar.png"
      }
    },
    props:{
      isMobile:{
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleCommand(command){
         this.$router.push(command);
      },
      goto(){
        window.open('https://www.whfch.icu/HT/',"_blank")
      }
    }
}
</script>
<style  scoped>
.lo-dh{
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
}
.lo-dh-img{
  width: 50px;
  height: 50px;
  margin-top: 5px;
}
.lo-avatar{
  justify-content: flex-start;
}
.lo-menu{
  flex: 1;
}
.lo-menu-item{
  display: flex;
  justify-content: center;
}
.lo-dh>ul>li{
  margin-right: 10px;
}
.el-menu.el-menu--horizontal{
  border-bottom: 0px solid #f3f3f3;
}
.icon-zhedie1{
  font-size: 35px;
  line-height: 60px;
}
.lo-welcome{
  width: 100%;
  line-height: 60px;
  margin-left: 50px;
  font-size: 23px;
}
.el-dropdown-menu--small .el-dropdown-menu__item {
    line-height: 50px;
    padding: 0 15px;
    font-size: 20px;
    width: 150px;
}
</style>