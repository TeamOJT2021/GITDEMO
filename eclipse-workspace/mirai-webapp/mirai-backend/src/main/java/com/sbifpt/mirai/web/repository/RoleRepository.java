package com.sbifpt.mirai.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.dto.entity.ERole;
import com.sbifpt.mirai.web.entity.Role;
//import com.sbifpt.mirai.web.dto.entity.Role;

/**
 * 
 * Interacting with the database
 * 
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Role findByName(ERole name);
}
