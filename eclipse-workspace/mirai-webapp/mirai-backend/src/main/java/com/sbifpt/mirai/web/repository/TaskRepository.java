package com.sbifpt.mirai.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.dto.entity.Task;


@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
	
	
//	@Query("SELECT p FROM Product p WHERE CONCAT(p.name, p.brand, p.madein, p.price) LIKE %?1% ")

	
//	@Query("SELECT t from User u JOIN u.projects p JOIN p.tasks t WHERE "
//			+ "CONCAT(u.firstName) LIKE %?1% AND u.userId = ?2 AND p.projectId = ?3")
//	List<Task> getAllTaskByUserIdAndProjectId(String name, long userId, long projectId );

	

}
