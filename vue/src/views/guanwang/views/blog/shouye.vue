<template>
    <div class="common_blog">
      <div>
        <el-button @click="rediretTUrl1">第一次点击</el-button>
        <el-button @click="rediretTUrl2">第二次点击</el-button>
        <el-button @click="rediretTUrl3">第三次点击</el-button>
        <!-- <a id="test" class="test_a" href="http://localhost:8089/rsm/idm/callback" target="_blank">第一次点击</a>
        <a id="test" class="test_a" href="http://localhost:8089/rsm/idm/callback?code=8fa98c6d0d724b483e21f8a54338" target="_blank">第二次点击</a>
        <a id="test" class="test_a" href="http://localhost:8089/rsm/idm/callback?access_token=623239c3760c600d81ed551e6d&expires=-1950167928" target="_blank">第三次点击</a> -->

        <template v-if="pageData.list">
        <div class="blogItem-body" style="position: relative;">
            <blogItem :list="pageData.list" width="900" ></blogItem> 
        </div>
            
        </template>
        <template v-else>
            无blog
        </template>
        <div style="height:150px;width:100%"></div>
          <div class="pagination2">
            <pagination :page-list="pageData" @pagesearch="handlePage"></pagination>
          </div>
      </div>
        <!-- <blogContent :editVisible="editVisible" :content="content" @closeBlog="closeBlog">
        </blogContent> -->
    </div>
</template>

<script>

export default {
    
    data() {
      return {
        pageData: {
            list: [],
            pageNumber: 1,
            pageSize: 10,
            totalCount: 0,
            totalPage: 0
        },
        editVisible:false,
        content:""
      };
    },
    created(){
        this.getdata();
    },
    methods: {
      // openBlog(content){
      //   this.content=content;
      //   this.editVisible=true;
      // },
      // closeBlog(){
      //   this.editVisible=false;
      // },
      rediretTUrl1(){
        window.location.href="http://10.7.160.92:8089/rsm/idm/callback"
      },
      rediretTUrl2(){
        window.location.href="http://10.7.160.92:8089/rsm/idm/callback?code=8fa98c6d0d724b483e21f8a54338"
      },
      rediretTUrl3(){
        window.location.href="http://10.7.160.92:8089/rsm/idm/callback?access_token=623239c3760c600d81ed551e6d&expires=-1950167928"
      },
      getdata() {
            this.$http
            .post(this.api.blogBlogQueryByCondition, {
            condition: {
                queryContent: this.queryContent,
            },
            number: this.pageData.pageNumber,
            size: this.pageData.pageSize
            })
            .then(res => {
            if (res.data.code == "200") {
                this.pageData.list = res.data.body.records;
                this.pageData.totalCount = res.data.body.total;
                this.pageData.totalPage = res.data.body.pages;
            }
            });
      },
    //页数
    handlePage(number, size){
      this.pageData.pageNumber=number;
      this.pageData.pageSize=size;
      this.getdata();
    },


    jinru1(){
      // console.log("jinru");
      // var url = 'https//www.baidu.com'
      // window.localtion.href = url
    }

    }
    
}
</script>

<style scoped>
    .pagination2{
        bottom: 60px;
        position: absolute;
        right: 20px;
        
    }
</style>