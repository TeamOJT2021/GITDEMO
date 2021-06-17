package com.sbifpt.mirai.web.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.entity.Permission;

@Repository
public interface PermissionRepository extends JpaRepository<Permission, Long>{

	@Query("SELECT p FROM User u JOIN u.roles r JOIN r.permissions p WHERE u.userId = ?1 AND r.roleId =?2")
	List<Permission> find(long userId, long roleId);
}
