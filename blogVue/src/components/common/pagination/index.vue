
<template>
  <div>
    <el-pagination 
      v-if="!isMobile"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageList.pageNumber"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="pageList.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageList.totalCount">
    </el-pagination>
    <el-pagination
      v-if="isMobile"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageList.pageNumber"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="pageList.pageSize"
      layout="total, sizes, prev, next"
      :total="pageList.totalCount">
    </el-pagination>
  </div>

</template>

<script>
export default {
  name: 'pagination',
  props: ['pageList'],
  computed: {
    isMobile(){
      return this.$utils._isMobile()
    }
  },
  methods: {
    /**
     * 获取 每页数量
     */
    handleSizeChange (val) {
      this.pageList.pageSize = val;
      this.$emit('pagesearch', this.pageList.pageNumber, val);
    },

    /**
     * 获取 当前页
     */
    handleCurrentChange (val) {
      this.pageList.pageNumber = val;
      this.$emit('pagesearch', val, this.pageList.pageSize);
    }
  }
}
</script>

<style scoped>
/* .mobile .btn-prev{
  margin-left: 60px;
} */
  .el-pagination{
    width: 100%;
    padding: 5px 0;
    text-align: center;
    background-color: white;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
</style>
