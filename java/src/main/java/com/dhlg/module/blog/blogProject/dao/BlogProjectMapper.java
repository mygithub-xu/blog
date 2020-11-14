package com.dhlg.module.blog.blogProject.dao;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.dhlg.module.blog.blogProject.entity.BlogProject;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dhlg.utils.common.Parameter;
import org.apache.ibatis.annotations.Param;

import java.util.Map;

/**
* <p>
*  Mapper 接口
* </p>
*
* @author xu
* @since
*/
public interface BlogProjectMapper extends BaseMapper<BlogProject> {

    IPage<BlogProject> queryByCondition(Page page, @Param("parameter") Parameter parameter);

    IPage<BlogProject> listFieldQuery(Page page, @Param("parameter") Map<String, Object> params);
}
        