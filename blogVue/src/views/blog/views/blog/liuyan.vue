``<template>
    <div class="common_blog">
      
      <div class="common_body">
        <div class="liuyan">
          <el-input
            type="textarea"
            placeholder="说点什么呢~"
            v-model="textarea"
            :autosize="{ minRows: 10, maxRows: 20}"
            maxlength="50"
            show-word-limit
          ></el-input>
        </div>

        <div class="denglv" >
          <!-- <div v-if="!token">
            <p>需要 <el-link type="success">登录</el-link>哦</p>
          </div> -->
          <div >
            <el-button @click="sendMessage">发送</el-button>
          </div>
        </div>

        <div class="commentCom">
          <div  v-for="item in commentList" :key="item.id" >
              <commentCom :item="item" :ismeID="ismeID"></commentCom>
          </div>
        </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        ismeID:"",
        textarea:"",
        token:false,
        isown:false,

        commentList:[
          {
          id:"1",
          userId:"4fcee6c3f7164300ab75e67b32871145",
          userName:"admin",
          headImg:"@/assets/img/avatar.png",
          fatherUserName:"",
          content:"bbbbbbbbbbbbbbbbbbbbbbb",
          time:"昨天6:00",
          child:[
            {
              id:"3",
              userName:"admin",
              userId:"2222",
              headImg:"@/assets/img/avatar.png",
              fatherUserName:"admin",
              content:"3333333333333333",
              time:"昨天6:00",
              
              child:[{
                id:"5",
                userName:"admin",
                userId:"2222",
                headImg:"@/assets/img/avatar.png",
                fatherUserName:"admin",
                content:"4444444444444444",
                time:"昨天6:00",
                child:[]
              }]
            }
          ]
          },
          {
          id:"2",
          userName:"admin",
          userId:"2222",
          headImg:"@/assets/img/avatar.png",
          fatherUserName:"",
          content:"22222222222222222",
          time:"昨天6:00",
          child:[]
          },
                    {
          id:"6",
          userName:"admin",
          userId:"2222",
          headImg:"@/assets/img/avatar.png",
          fatherUserName:"",
          content:"22222222222222222",
          time:"昨天6:00",
          child:[
            {
              id:"15",
              userName:"admin",
              userId:"2222",
              headImg:"@/assets/img/avatar.png",
              fatherUserName:"admin",
              content:"3333333333333333",
              time:"昨天6:00",
              child:[{
                id:"5",
                userName:"admin",
                userId:"2222",
                headImg:"@/assets/img/avatar.png",
                fatherUserName:"",
                content:"4444444444444444",
                time:"昨天6:00",
                child:[]
              }]
            }
          ]
          },
                    {
          id:"7",
          userName:"admin",
          userId:"2222",
          headImg:"@/assets/img/avatar.png",
          fatherUserName:"",
          content:"22222222222222222",
          time:"昨天6:00",
          child:[]
          },
        {
          id:"8",
          userName:"admin",
          userId:"2222",
          headImg:"@/assets/img/avatar.png",
          fatherUserName:"",
          content:"22222222222222222",
          time:"昨天6:00",
          child:[]
          },

        ]
      };
    },
    created(){
      this.getData();
      this.check();
    },
    methods: {
      shanchu(){

      },
      check(){
        let Token=sessionStorage.getItem("Token");
        if(Token){
          this.token=true;
          let userName=sessionStorage.getItem("userName");
          if(userName!=""){
            this.isown=true
            let ismeID=sessionStorage.getItem("userId");
            this.ismeID=ismeID;
          }
        }
      },
      getData(){
        
      },
      sendMessage(){
        
      }
    }
}
</script>
<style lang="less" scoped>
.liuyan{
  width: 700px;
  margin: 0 auto;
}
.denglv{
  height: 50px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-size: 25px;
}
.common_body{
  width: 700px;
  margin: 0 auto;
}


.liuyanjilv{
  width: 700px;
  min-height: 700px;
  margin-bottom: 20px;
}
.commentCom{
  float: left;
  width: 670px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow:  0 2px 12px 0 rgba(0,0,0,.1);
  min-height: 200px;
  margin-bottom: 20px;
  padding: 10px 15px;
  
}
</style>