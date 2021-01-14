// 默认导出整个接口配置
export default {
  // 账号管理
  
  menu: `system/sysMenu/getnodelist`, // 菜单 // 账号管理 // 登陆
  exceldaochu: `system/sysLoginLog/excel`,//列表查询

  /********* 系统配置  start******/
  // 菜单配置
  menuList: `system/sysMenu/getnodelist`,
  deleteNode: `system/sysMenu/deletenode/`,
  saveNode: `system/sysMenu/savenode`,

  //文件上传
  sysFileUploadFile: `system/sysFile/uploadFile`,//文件上传
  sysFileUploadFile: `system/sysFile/uploadFileMore`,//多文件上传
  sysFileDeleteFile: `system/sysFile/deleteFile/`,//单个文件删除
  sysFileBatchdelete: `system/sysFile/batchdelete`,//批量文件删除
  sysFileQuerybycondition: `system/sysFile/querybycondition`,//查询文件

  // 权限管理--角色管理
  roleQuerybycondition: `system/sysRole/querybycondition`,//查询（分页）
  roleGetList: `system/sysRole/getList`,//查找所有角色（不分页）
  roleDeleteById: `system/sysRole/deleteById/`,//通过id删除角色
  roleSaveorupdate: `system/sysRole/saveorupdate`,//更新或新增
  roleBatchUpdate: `system/sysRole/batchUpdate`,//批量更新状态
  roleBatchDelete: `system/sysRole/batchDelete`,//批量删除
  roleGetButMenu: `system/sysRole/getButMenu`,//获取菜单与按钮树形数据
  roleGetButByRoleId: `system/sysRole/getButByRoleId/`,//通过角色id找到rolePremission表中对应的数据
  rolePermissionBatchsave: `system/sysRolePermission/batchsave/`,//获取按钮通过roleId


  //字典管理
  dicTypeSave: `system/sysdictype/save`,
  dicTypeQueryByPage: `system/sysdictype/querybypage`,
  dicTypeDelete: `system/sysdictype/delete/`, //{id}
  dicTypeBatchDelete: `system/sysdictype/bacthdelete`,
  dicTypeGetType: `system/sysdictype/gettype/`, //{dicType}
  dicSave: `system/sysdic/save`,
  dicQueryByPageAndDicTypeID: `system/sysdic/querybypageanddictypeid/`, //{dicTypeId}
  dicDelete: `system/sysdic/delete/`, //{id}
  dicBatchDelete: `system/sysdic/batchdelete`,
  dicQueryAll: `system/sysdic/queryAllDic`,

  //按钮配置 sys_button_config
  buttonConfigSave: `system/sysbuttonconfig/saveOrUpdate`,
  buttonConfigQueryByPage: `system/sysbuttonconfig/querybycondition`,
  buttonConfigDelete: `system/sysbuttonconfig/delete/`, //{id}
  buttonConfigBatchDelete: `system/sysbuttonconfig/batchdelete`,

  //按钮管理 sys_button
  buttonList: `system/sysbutton/selectbuttonlist`,
  deleteButton: `system/sysbutton/deletebyid/`,
  updateButton: `system/sysbutton/updatebyid`,
  insertButton: `system/sysbutton/insert`,
  
  // 账号管理 sys_user
  login: `system/sysUser/login`, // 登陆
  logout: `system/sysUser/logout`, // 登出
  userGetList: `system/sysUser/getList`,//获得全部账号
  userQueryByCondition: `system/sysUser/queryByCondition`,//查询
  userDeletebyid: `system/sysUser/deleteById/`,//单个删除用户
  userBatchDelete: `system/sysUser/bacthdelete`,//批量删除用户
  userSaveOrUpdate: `system/sysUser/saveOrUpdate`,//更新或新增用户
  userResetPassword :`system/sysUser/resetPassword/`,//重置密码
  userQueryById :`system/sysUser/queryById/`,//根据id查询用户
  userQueryHeadPortraitById :`system/sysUser/queryHeadPortraitById/`,//根据id获取解密后的图片
  userUpdateUserInfo :`system/sysUser/updateUserInfo`,//用户修改自己的信息
  userUpdatePasswordById :`system/sysUser/updatePassword`,//用户修改自己的密码


  //登入日志 sys_login_log
  LoginLogQuery: `system/sysLoginLog/query`, // 条件查询
  LoginLogBatchdelete: `system/sysLoginLog/batchdelete`, // 条件查询

  /********* 系统配置  end******/

  //博客管理--start
  //博客文章
  blogBlogQueryByCondition: `blog/blogBlog/querybycondition`,//查询
  blogBlogDeletebyid: `blog/blogBlog/deleteById/`,//单个删除
  blogBlogBatchDelete: `blog/blogBlog/batchdelete`,//批量删除
  blogBlogSaveOrUpdate: `blog/blogBlog/saveOrUpdate`,//更新或新增
  blogBlogListFieldQuery: `blog/blogBlog/listFieldQuery`,//列表查询
  

  blogProjectQueryByCondition: `blog/blogProject/querybycondition`,//查询
  blogProjectDeletebyid: `blog/blogProject/deleteById/`,//单个删除
  blogProjectBatchDelete: `blog/blogProject/batchdelete`,//批量删除
  blogProjectSaveOrUpdate: `blog/blogProject/saveOrUpdate`,//更新或新增
  blogProjectListFieldQuery: `blog/blogProject/listFieldQuery`,//列表查询

  

  
}