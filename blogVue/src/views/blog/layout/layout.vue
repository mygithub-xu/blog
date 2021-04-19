<template>
    <div class="blogContain">
      <div class="mainHeadin"><loHead></loHead></div>
      <el-scrollbar  class="mainPage">
          <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
          </transition>
         <loFooter class="footer"></loFooter>
      </el-scrollbar>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        avatar:"",
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    mounted(){
      // 判断是否为手机

    },
    methods: {
    }
  }
</script>
<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.blogContain{
  // width: 100%;
  // height: 100%;
}
.mainPage{
  width: 100%;
  margin: 0 auto;
  background-color: #f3f3f3;
  height: calc(100% - 61px)
}
.mainHead{
  height: 60px;
  width: 100%;
  position:fixed;
  top: 0; 
  z-index: 1000;
  border-bottom: 2px solid #f3f3f3;
  border-top: 1px solid #f3f3f3;
  background-color: #ffffff;
}
.mainHeadin{
  width: 60%;
  margin-left: 20%;
  height: 60px;
  border-bottom: 1px solid #f3f3f3;
}
</style>