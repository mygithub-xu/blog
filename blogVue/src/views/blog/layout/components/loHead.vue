<template>
      <div class="lo-dh">

        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" unique-opened router>
          <el-menu-item index="0">
              <img class="lo-dh-img" src="@/assets/img/avatar.png"/>
          </el-menu-item>
          <div style="height:60px;width:200px;float:left"></div>
          <el-menu-item index="/blog/shouye" >首页</el-menu-item>
          <el-menu-item index="/blog/biaoqian" >标签</el-menu-item>
          <el-menu-item index="/blog/guidang" >归档</el-menu-item>
          <el-menu-item index="/blog/xiangmu" >项目</el-menu-item>
          <el-menu-item index="/blog/liuyan" >留言</el-menu-item>
          <el-menu-item index="/blog/guanyu" >我的</el-menu-item>
          <el-menu-item index="/login">
            <div class="el-icon-position"></div>
          </el-menu-item>
        </el-menu>

      </div>
</template>
<script>
export default {
  name:"loHead",
    data() {
      return {
        avatar:"",
        activeIndex: '/blog/shouye',

      };
    },
    methods: {
      handleSelect(key, keyPath) {
        
      }
    }
}
</script>
<style  scoped>
.lo-dh-img{
  width: 50px;
  height: 50px;
}
.lo-dh{
  width: 1000px;
  height: auto;
  margin: 0 auto;
}
/* .lo-dh>ul{
  padding-right: 100px;
} */
.lo-dh>ul>li{
  margin-right: 10px;
}
.lo-lbt{
  height: 700px;
}
.el-menu.el-menu--horizontal{
  border-bottom: 0px solid #f3f3f3;
}
.el-menu-demo{
  /* background-color: transparent; */
}
</style>