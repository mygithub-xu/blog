<template>
    <div class="common_blog">
        <el-tabs :tab-position="tabPosition"  v-model="activeName" @tab-click="handleClick" >
            <el-tab-pane v-for="item in biaoqian" :key="item.value" :label="item.label"  :name="item.value" >
                <div class="tabContent" >
                    <template v-if="pageData.list">
                        <div class="blog-body"  v-for="item in pageData.list" :key="item.id">
                            <template v-if="isMobile">
                                <blogItemPC :item="item"></blogItemPC> 
                            </template>
                            <template v-else>
                                <blogItem :item="item"></blogItem> 
                            </template>
                        </div>
                    </template>
                    <template v-else>
                        <span>无blog</span>
                    </template>
                </div>
            </el-tab-pane>
        </el-tabs>
        <div>
            <template v-if="isMobile">
                <pagination class="pagination3" :page-list="pageData" @pagesearch="handlePage"></pagination>
            </template>
            <template v-else>
                <div class="pagination2">
                    <pagination :page-list="pageData" @pagesearch="handlePage"></pagination>
                </div>
            </template>
            
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'left',
        activeName:"-1",
        biaoqian:[],
        pageData: {
            list: [],
            pageNumber: 1,
            pageSize: 10,
            totalCount: 0,
            totalPage: 0
        },
        isMobile:false
      }
    },
    created(){
        this.getType();
        this.getData();
    },
    mounted(){
        this.isMobile = this.$utils._isMobile()
    },
    methods: {
        getData(){
            this.$http
            .post(this.api.blogBlogQueryByCondition, {
            condition: {
                category: this.activeName,
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
        getType(){
            this.$http.get(this.api.dicTypeGetType + "blogType").then(res => {
                if (res.data.code == 200) {
                    this.biaoqian = res.data.body;
                }
            })
        },
        //页数
        handlePage(number, size){
            this.pageData.pageNumber=number;
            this.pageData.pageSize=size;
            this.getData();
        },
        handleClick() {
            this.empty();
            this.getData();
        },
        empty(){
            this.pageData.pageNumber=1;
            this.pageData.pageSize=10;
        }
        
    }
  };
</script>
<style scoped>
    .pagination2{
      width: auto;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
      margin-top: 50px;
    }
    .el-pagination{
      padding: 10px 50px;
      margin-right: 50px;
      background-color: white;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .tabContent{
        width:100%;
        min-height:500px;
        margin-left:50px;
        position: relative;
    }
    .pagination3{
        width: auto;
        display: flex;
        justify-content: center;
        margin: 20px 10px;
    }
    @media screen and (max-width:600px){
        .tabContent{
            width: 100%;
            margin-left: 0px;
        }
    
    }
</style>