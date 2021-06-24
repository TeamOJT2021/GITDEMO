package com.sbifpt.mirai.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.dto.entity.UserRoleProject;

@Repository
public interface UserRoleProjectRepository extends JpaRepository<UserRoleProject, Long> {
	

}
