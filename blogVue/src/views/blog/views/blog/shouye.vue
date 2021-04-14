<template>
    <div class="common_blog">
      <div>
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