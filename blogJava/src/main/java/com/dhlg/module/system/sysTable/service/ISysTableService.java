package com.dhlg.module.system.sysTable.service;

import com.dhlg.module.system.sysTable.entity.SysTable;
import com.baomidou.mybatisplus.extension.service.IService;
import com.dhlg.utils.Parameter.Parameter;
import com.dhlg.utils.Result;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author xu
 * @since
 */
public interface ISysTableService extends IService<SysTable> {

    Result customSaveOrUpdate(SysTable sysTable);

    Result delete(String id);

    Result deleteBatch(List<String> ids);

    Result queryByCondition(Parameter parameter);

    Result listFieldQuery(Map<String, Object> params);
}
