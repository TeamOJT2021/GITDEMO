package com.sbifpt.mirai.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.entity.Task;

//import com.sbifpt.mirai.web.dto.entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
	
	

}
