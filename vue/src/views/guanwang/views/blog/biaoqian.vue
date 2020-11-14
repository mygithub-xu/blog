<template>
    <div class="common_blog">
        <el-tabs :tab-position="tabPosition"  v-model="activeName" @tab-click="handleClick" >
            <el-tab-pane v-for="item in biaoqian" :key="item.value" :label="item.label"  :name="item.value" >
                <div class="tabContent" >
                    <template v-if="pageData.list">
                        <blogItem :list="pageData.list" width="800"></blogItem> 
                    </template>
                    <template v-else>
                        <span>无blog</span>
                    </template>
                    <div style="height:120px;width:100%"></div>
                    <div class="pagination2">
                        <pagination :page-list="pageData" @pagesearch="handlePage"></pagination>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>

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
      };
    },
    created(){
        this.getType();
        this.getData();
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
            this.$http
                .get(this.api.dicTypeGetType + "blogType").then(res => {
                if (res.data.code == 200) {
                    this.biaoqian = res.data.body;
            }
            });
        },
        //页数
        handlePage(number, size){
            this.pageData.pageNumber=number;
            this.pageData.pageSize=size;
            this.getData();
        },
        handleClick(tab, event) {
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
        float: right;
        bottom: 30px;
        right: 67px;
        position: absolute;
    }
    .tabContent{
        width:100%;
        min-height:500px;
        margin-left:50px;
        position: relative;
    }
</style>