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

//	@EntityGraph(value = "usersRolesProjectses", type = EntityGraphType.FETCH)
	@Query("SELECT p FROM UserRoleProject urp JOIN urp.roles p JOIN urp.users u WHERE u.id = ?1")
	List<Project> findAllProjectByUserId(long userId);

}
