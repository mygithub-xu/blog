<template>
    <div class="common_blog">
        
        <div class="dialog-blog">
            <a size="small" class="icon iconfont icon-changjiantou_zuo" @click="cancelSave"></a>
            <div class="blog-header">
                <h1>{{params.title}}</h1>
                <p>{{params.description}}</p>
            </div>
            <div class="ql-container ql-snow">
                <div class="ql-editor" v-html="params.content">
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
        wechat: "https://www.whfch.icu/resources/wechat.jpg",
        params: {}
      }
    },
    created(){
        this.params=this.$route.params;
    },
    methods: {
        cancelSave(){
            //返回上一页
            //如果是苹果手机，刷新一下
            if (this.isApple()) {
                window.location.reload()
            }
            this.$router.go(-1);
        },
        isApple(){
            var u = navigator.userAgent
            return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        }

    }
    
}
</script>

<style scoped>
    .blog-header h1{
        font-size: 30px;
        font-weight: bold;
    }
    .blog-header p{
        margin-top: 20px;
        font-size: 22px;
    }
    .blog-header{
        width: 100%;
        text-align: center;
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
    @media screen and (max-width:600px){
        .blog-header h1{
            font-size: 25px;
            font-weight: bold;
        }
        .blog-header p{
            margin-top: 20px;
            font-size: 15px;
        }
    }
</style>