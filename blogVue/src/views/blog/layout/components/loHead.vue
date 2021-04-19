<template>
      <div class="lo-dh">
        <div class="lo-avatar">
              <img class="lo-dh-img" src="@/assets/img/avatar.png"/>
        </div>
        <div class="lo-menu">
          <div class="lo-menu-item">
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" unique-opened router>
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
        </div>
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
.lo-dh{
  width: 1000px;
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
</style>