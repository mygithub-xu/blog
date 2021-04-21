<template>
  <div class="common_blog">
  <div class="block">
    <el-timeline>
      <el-timeline-item  placement="top" v-for="item in pageData.list" :key="item.id" :timestamp="item.createTime">
        <el-card class="blogCard">
          <h3>{{item.title}}</h3>
          <p>{{item.description}}</p>
          <p> 发布于 {{item.createTime}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
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
      };
    },
    created(){
        this.getdata();
    },
    methods: {
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

    }
}
</script>
<style scoped>
.block{
    margin-left: 100px;
}
.blogCard{
    width: 500px;
}
.blogCard p{
    margin-top: 15px;
}
@media screen and (max-width:600px){
.block {
    margin-left: 0px;
    padding-right: 10px;
}
.blogCard{
  width: 100%;
}
}
</style>