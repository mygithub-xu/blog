<template>
    <div class="comment-body"  >
      <div class="comment-header">
        <img :src="item.headImg"/>
      </div>
      <div class="comment-other" >
        <div class="comment-top">
          <div class="comment-userName">{{item.userName}}</div>
          <el-link class="comment-del" type="danger" v-if="item.userId==ismeID">删除</el-link>
        </div>

        <div class="comment-bottom">
          <span v-if="item.fatherUserName&&flag>2"> 回复:{{item.fatherUserName}} </span>
          <span class="comment-content-span">{{item.content}}</span> 
          <span> :{{item.time}}</span>
        </div>
        <div class="comment-reply" v-if="item.child.length>0">
          <el-link  type="primary" @click="showChild" v-if="isShow">收回回复 </el-link>
          <el-link  type="primary" @click="showChild" v-else>展开{{item.child.length}}条回复 </el-link>
        </div>
        <!-- <el-button @click="showChild('comment'+item.id)">点击{{flag}} : {{isShow}}</el-button> -->
      </div>
      <div class="comment-child " v-if="item.child" :class="{'comment-child-div':flag==1}">
        <!-- :class="{'comment-child-div':flag==1}" -->
        <div  v-for="v in item.child" :key="v.id" >
          <commentCom :item="v" :flag="flag+1" v-if="isShow"></commentCom>
        </div>
      </div>
    </div>

</template>
<script>
export default {
    name:"commentCom",
    data() {
      return {
        isShow:false
      }
    },
    props:{
        item: {
            type:  Object,
            default: () => null,
        },
        flag:{
          type:Number,
          default:1
        },
        show:{
          type:Boolean,
          default:false
        },
        ismeID:{
          type: String,
          default: () => "",
        }
    },
    methods: {
      showChild(){
        this.isShow=!this.isShow
      }
    }
}
</script>
<style scoped>
    .comment-body{
        /* margin-top: 10px;
        margin-bottom: 10px; */
        min-height: 120px;
        /* border-bottom: 0.5px solid #f3f3f3; */
    }
    .comment-header{
      min-height: 120px;
      width: 10%;
      float: left;
    }
    .comment-header img{
      height: 40px;
      width: 40px;
      border-radius: 100%;
    }
    .comment-other{
      min-height: 120px;
      width: 90%;
      float: left;
    }
    .comment-child{
      width: 100%;
      float: left;
    }
    .comment-child-div{
      width: 80%;
      margin-left: 20%;
    }
    .comment-top{
      width: 100%;
      height: 40px;
      float: left;
    }
    .comment-top .comment-userName{
      width: 50%;
      float: left;
      
    }
    .comment-top .comment-del{
      float: right;
      text-align: right;
    }
    .comment-bottom{
      width: 100%;
      height: 40px;
      float: left;
    }
    /* .comment-content-span{
      letter-spacing:1px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      line-height: 2;
    } */
    .comment-reply{

    }
</style>