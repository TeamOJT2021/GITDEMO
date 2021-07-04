package com.sbifpt.mirai.web.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.dto.entity.Task;
import com.sbifpt.mirai.web.repository.custom.TaskRepositoryCustom;


@Repository
public interface TaskRepository extends JpaRepository<Task, Long>, TaskRepositoryCustom {
	
//	@Query("SELECT p FROM Product p WHERE CONCAT(p.name, p.brand, p.madein, p.price) LIKE %?1% ")

//	@Query("SELECT t from User u JOIN u.projects p JOIN p.tasks t WHERE "
//			+ "CONCAT(u.firstName) LIKE %?1% AND u.userId = ?2 AND p.projectId = ?3")
//	List<Task> getAllTaskByUserIdAndProjectId(String name, long userId, long projectId );

	@Query("SELECT t FROM "
			+ "UserProjectPeriod upr "
			+ "JOIN upr.user u "
			+ "JOIN upr.project p "
			+ "JOIN upr.period pr "
			+ "JOIN pr.tasks t "
			+ "WHERE u.id = ?1 AND p.id = ?2 AND pr.date = ?3")
	List<Task> findAllTaskByUserIdAndProjectId(long userId, long projectId, Date date);

	

}
