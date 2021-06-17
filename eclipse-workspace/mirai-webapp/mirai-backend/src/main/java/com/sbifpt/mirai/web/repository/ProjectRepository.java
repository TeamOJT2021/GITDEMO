package com.sbifpt.mirai.web.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.entity.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{
	
	
	@Query("SELECT p FROM User u JOIN u.projects p WHERE p.projectId = ?1 AND u.userId = ?2")
	Optional<Project> findByProjectByProjectIdAndUserId(long projectId, long userId);
	
	@Query("SELECT p FROM User u JOIN u.projects p WHERE u.userId = ?1")
	List<Project> getAllProjectByUserId(long userId);
	
//	@Query("SELECT p FROM User u JOIN u.roles r JOIN r.permissions p WHERE u.userId = ?1 AND r.roleId =?2")
//	List<Permission> find(long userId, long roleId);
	
}
