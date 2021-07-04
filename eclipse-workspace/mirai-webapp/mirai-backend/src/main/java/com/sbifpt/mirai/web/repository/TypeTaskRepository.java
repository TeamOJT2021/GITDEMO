package com.sbifpt.mirai.web.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.dto.entity.TypeTask;


@Repository
public interface TypeTaskRepository extends JpaRepository<TypeTask, Long>{
	
//	@Query("SELECT ty FROM TypeTask ty WHERE ty.tasks.id = ?1")
//	TypeTask findAllByTaskId(long taskId);

}
