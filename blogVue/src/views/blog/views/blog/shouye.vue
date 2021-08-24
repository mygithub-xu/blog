<template>
    <div class="bl-view">
      <template v-if="isMobile">
        <div style="width:100%">
          <template v-if="pageData.list">
          <div class="blogItem-body">
            <div class="blog-body"  v-for="item in pageData.list" :key="item.id">
                <blogItemPC :item="item"></blogItemPC> 
            </div>
          </div>
          </template>
            <pagination class="pagination3" :page-list="pageData" @pagesearch="handlePage"></pagination>
        </div>
      </template>
      <template v-else>
        <div class="common_blog">
          <template v-if="pageData.list">
          <div class="blogItem-body">
            <div class="blog-body"  v-for="item in pageData.list" :key="item.id">
                <blogItem :item="item"></blogItem> 
            </div>
          </div>
          </template>
          <div class="pagination2">
            <pagination :page-list="pageData" @pagesearch="handlePage"></pagination>
          </div>
        </div>
      </template>

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
        editVisible: false,
        content: "",
        isMobile: false,
        biaoQianList: []
      }
    },
    created(){
        this.getdata()
    },
    mounted(){
      // 判断是否为手机
      this.isMobile = this.$utils._isMobile()
    },
    methods: {
      getdata() {
        this.$http.post(this.api.blogBlogQueryByCondition, {
        condition: {
            queryContent: this.queryContent,
            isShow: '0'
        },
        number: this.pageData.pageNumber,
        size: this.pageData.pageSize
        }).then(res => {
        if (res.data.code == "200") {
            this.pageData.list = res.data.body.records;
            this.pageData.totalCount = res.data.body.total;
            this.pageData.totalPage = res.data.body.pages;
        }
        })
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
      width: auto;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
      margin-top: 50px;
    }
    .pagination3{
      width: auto;
      display: flex;
      justify-content: center;
      margin: 20px 10px;
    }
</style>