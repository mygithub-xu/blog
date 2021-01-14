<template>

    <div>
        <el-dialog  :visible.sync="editVisible"  :show-close="false" :modal="false" fullscreen>
            
            <div class="dialog-blog">
                <a size="small" class="icon iconfont icon-changjiantou_zuo" @click="cancelSave"></a>
                <div class="blog-header">
                    
                </div>
                <div class="blog-description">

                </div>

                <div class="ql-container ql-snow">
                    <div class="ql-editor" v-html="content">
                    </div>
                </div>
                <div class="weixin-img">
                    <img :src="wechat" />
                    <p class="jiawo">扫描二维码加我</p>
                </div>
                
            </div>
            
                <!-- <slot name="ceshi">hehehheehehe</slot> -->
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:"blogContent",
    data(){
        return{
            wechat:"../../../static/img/qq.png",
        }
    },
    props:{
        content:{
            type: String,
            default: () => "",
        },
        editVisible:{
            type:Boolean,
            default: () => false,
        }
    },
    methods:{
        cancelSave(){
            this.$emit("closeBlog");
        }
    }
}
</script>
<style scoped>
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
.common_blog .dialog-blog{
    padding: 20px;
}
.dialog-blog{
    width: 100%;
    float: left;
}
</style>