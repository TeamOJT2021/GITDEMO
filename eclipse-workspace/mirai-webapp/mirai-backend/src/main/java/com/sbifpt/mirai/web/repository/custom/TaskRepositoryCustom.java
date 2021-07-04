package com.sbifpt.mirai.web.repository.custom;

import java.util.List;

import com.sbifpt.mirai.web.dto.entity.Task;

public interface TaskRepositoryCustom {
	List<Task> findBooksByAuthorNameAndTitle(Long userId, Long projectId, int month, int year);

}
