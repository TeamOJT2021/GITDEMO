package com.sbifpt.mirai.web.repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.dto.entity.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

	
	@Query("SELECT p FROM Project p WHERE p.id = ?1")
	Project findByProjectId(long projectID);
	
	@Query("SELECT p FROM UserRoleProject urp JOIN urp.project p JOIN urp.user u WHERE u.id = ?1")
	List<Project> findAllProjectByUserId(long userId);

}
