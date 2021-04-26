// 默认导出整个接口配置
export default {
  // 参数配置
  // 账号管理
  menu: `api/system/sysMenu/getnodelist`, // 菜单 // 账号管理 // 登陆
  excelImport: `api/system/sysLoginLog/excel`,//列表查询
  sysTestExportExcel: 'test/sysTest/exportExcel',
  /********* 系统配置  start******/

  //字典管理
  dicTypeSave: `api/system/sysdictype/save`,
  dicTypeQueryByPage: `api/system/sysdictype/querybypage`,
  dicTypeDelete: `api/system/sysdictype/delete/`, //{id}
  dicTypeBatchDelete: `api/system/sysdictype/bacthdelete`,
  dicTypeGetType: `api/system/sysdictype/gettype/`, //{dicType}
  dicSave: `api/system/sysdic/save`,
  dicQueryByPageAndDicTypeID: `api/system/sysdic/querybypageanddictypeid/`, //{dicTypeId}
  dicDelete: `api/system/sysdic/delete/`, //{id}
  dicBatchDelete: `api/system/sysdic/batchdelete`,
  dicQueryAll: `api/system/sysdic/queryAllDic`,
  sysdictypeGetAll: `api/system/sysdictype/getAll`,

  /********* 系统配置  end******/

  //博客管理--start
  //博客文章
  blogBlogQueryByCondition: `api/blog/blogBlog/querybycondition`,//查询
  blogBlogDeletebyid: `api/blog/blogBlog/deleteById/`,//单个删除
  blogBlogBatchDelete: `api/blog/blogBlog/batchdelete`,//批量删除
  blogBlogSaveOrUpdate: `api/blog/blogBlog/saveOrUpdate`,//更新或新增
  blogBlogListFieldQuery: `api/blog/blogBlog/listFieldQuery`,//列表查询
  blogBlogReadCountAdd: `api/blog/blogBlog/readCountAdd/`,//列表查询
  


  blogProjectQueryByCondition: `api/blog/blogProject/querybycondition`,//查询
  blogProjectDeletebyid: `api/blog/blogProject/deleteById/`,//单个删除
  blogProjectBatchDelete: `api/blog/blogProject/batchdelete`,//批量删除
  blogProjectSaveOrUpdate: `api/blog/blogProject/saveOrUpdate`,//更新或新增
  blogProjectListFieldQuery: `api/blog/blogProject/listFieldQuery`,//列表查询
}