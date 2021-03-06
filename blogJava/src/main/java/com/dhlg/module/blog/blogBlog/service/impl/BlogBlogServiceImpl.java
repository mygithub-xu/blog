package com.dhlg.module.blog.blogBlog.service.impl;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.dhlg.module.blog.blogBlog.entity.BlogBlog;
import com.dhlg.module.blog.blogBlog.dao.BlogBlogMapper;
import com.dhlg.module.blog.blogBlog.service.IBlogBlogService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dhlg.utils.*;
import com.dhlg.utils.Parameter.Parameter;
import com.mysql.cj.jdbc.util.ResultSetUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author xu
 * @since 2020-05-05
 */
@Service
public class BlogBlogServiceImpl extends ServiceImpl<BlogBlogMapper, BlogBlog> implements IBlogBlogService {

    @Autowired
    BlogBlogMapper doMapper;

    @Override
    public Result customSaveOrUpdate(BlogBlog blogBlog) {
        //判断新增还是修改
        if (!StringUtils.isBlank(blogBlog.getId())) {
            blogBlog.setUpdateTime(DateUtils.getCurrentDate());
            //修改
            if(!updateById(blogBlog)){
                return new Result("500","", Dictionaries.UPDATE_FAILED);
            }
            return new Result("200","",Dictionaries.UPDATE_SUCCESS);
        }
        blogBlog.setId(StringUtils.uuid());
        blogBlog.setCreateTime(DateUtils.getCurrentDate());
        if (!save(blogBlog)){
            return new Result("500","", Dictionaries.SAVE_FAILED);
        }
        return new Result("200","",Dictionaries.SAVE_SUCCESS);
    }

    @Override
    public Result delete(String id) {
        if (!removeById(id)){
            return new Result("500","", Dictionaries.DELETE_FAILED);
        }
        return new Result("200","",Dictionaries.DELETE_SUCCESS);
    }

    @Override
    public Result deleteBatch(List<String> ids) {
        if (!removeByIds(ids)){
            return new Result("500","", Dictionaries.DELETE_FAILED);
        }
        return new Result("200","",Dictionaries.DELETE_SUCCESS);
    }

    @Override
    public Result queryByCondition(Parameter parameter) {
        parameter.setDefault();
        IPage<BlogBlog> dataList = doMapper.queryByCondition(parameter.getPage(), parameter);
        return new Result(dataList);
    }

    @Override
    public Result listFieldQuery(Map<String, Object> params) {
        Long number = Long.valueOf(String.valueOf(params.getOrDefault("number", 1)));
        Long size = Long.valueOf(String.valueOf(params.getOrDefault("size", 10)));
        IPage<BlogBlog> dataList = doMapper.listFieldQuery(new Page(number, size), params);
        return new Result("200", dataList);
    }

    @Override
    public Result readCountAdd(String id) {
        doMapper.readCountAdd(id);
        return null;
    }

    @Override
    public Result queryById(String id) {
        BlogBlog blog = getById(id);
        if (StringUtils.isBlank(blog)){
            Result.error("未找到该文章");
        }
        return Result.success(blog);
    }
}
