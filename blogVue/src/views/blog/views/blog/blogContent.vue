<template>
    <div class="common_blog">
        
        <div class="dialog-blog">
            <a size="small" class="icon iconfont icon-changjiantou_zuo" @click="cancelSave"></a>
            <div class="ql-container ql-snow">
                <div class="ql-editor" v-html="content">
                </div>
            </div>
            <div class="weixin-img">
                <img :src="wechat" />
                <p class="jiawo">扫描二维码加我</p>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    
    data() {
      return {
        wechat:"../../../../static/img/qq.png",
        content:""
      };
    },
    created(){
        let cn=this.$route.params.content;
        this.content=this.$route.params.content;
    },
    methods: {
        cancelSave(){
            //返回上一页
            this.$router.go(-1);
        },


    }
    
}
</script>

<style scoped>
    .pagination2{
        bottom: 60px;
        position: absolute;
        right: 20px;
        
    }
    .ql-container.ql-snow{
        border: 0px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    .icon-changjiantou_zuo{
        color: salmon;
        font-size: 35px;
    }
    .weixin-img{
        height: 200px;
        width: 150px;
        margin: 0 auto;
        margin-top: 20px;
        text-align: center;
    }
    .weixin-img img{
        height: 150px;
        width: 150px;
    }
    .jiawo{
        color: #409EFF;
        margin-top: 10px;
    }
</style>