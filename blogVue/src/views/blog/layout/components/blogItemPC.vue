<template>
<div>
    <div class="blog-body">
        <div class="blog-header">
            <h2 class="blog-title">
                <el-link class="title" @click="blogClick(item)">{{item.title}}</el-link>
            </h2>
            <div class="blog-description">
                <p>{{item.description}}</p>
            </div>
            <div class="blog-meta">
                <span class="blog-time">
                    <span class="icon iconfont icon-rili"></span>
                    <span>{{item.createTime}}</span>
                </span>
                <span class="blog-category">
                    <span class="blog-divider">|</span>
                    <span class="icon iconfont icon-tubiao-"></span>
                    <span>{{item.categoryName}}</span>
                </span>
                <span class="blog-read">
                    <span class="blog-divider">|</span>
                    <span class="icon iconfont icon-tubiaozhizuomoban"></span>
                    <span>{{item.reading}}</span>
                </span>
                <span class="blog-like">
                    <span class="blog-divider">|</span>
                    <span class="icon iconfont icon-xihuan"></span>
                    <span>{{item.like}}</span>
                </span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"blogItemPC",
    data() {
      return {

      }
    },
    props:{
        item: {
            type:  Object,
            default: () => null,
        }
    },
    methods: {
        blogClick(item){
            this.$router.push({
                path:`/blog/blogContent/${item.id}`
            })
            // 阅读+1
            this.readCountAdd(item.id)
        },
        readCountAdd(id) {
            this.$http.get(this.api.blogBlogReadCountAdd + id)
        }
    }
}
</script>
<style scoped>
    .blog-body{
        margin-top: 20px;
        border-radius: 10px;
        background-color: #ffffff;
        padding: 10px 20px;
        box-shadow:  0 2px 12px 0 rgba(0,0,0,.1);
        min-height: 200px;
        margin: 10px 10px;
    }
    .blog-title{
        height: 73px;
        width: 100%;
    }
    .blog-title .title{
        margin-top: 20px;
        color: #555;
        font-size: 22px;
        line-height: 1.2;
        vertical-align: top;
    }
    .blog-meta{
        height: 24px;
        width: 100%;
        color: #999;
        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 12px;
    }
    .blog-like{
        width: 100%;
        margin-bottom: 20px;
    }
    .blog-cover-image{
        display: block;
        width: 20%;
        height: 200px;
        overflow: hidden;
        float: left;
        padding-left: 20px;
    }
    .blog-divider{
        margin: 0 0.5em;
    }
    .blog-description p{
        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 16px;
        line-height: 2;
        color: #555;
        height: 100px;
        letter-spacing:1px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
    }
    .blog-header{
        float: left;
        width: 100%;
        height: 200px;
    }
</style>