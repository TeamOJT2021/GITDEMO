package com.sbifpt.mirai.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.entity.User;

//import com.sbifpt.mirai.web.dto.entity.User;
/**
 * 
 * Interacting with the database
 * 
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	User findByFirstName(String username);

	User findByEmail(String email);

	Boolean existsByFirstName(String username);

	Boolean existsByEmail(String email);

//	@Query("SELECT u, r, p FROM User u JOIN u.roles r JOIN r.permissions p WHERE u.userId = ?1 AND r.roleId =?2")
//	List<Object> getUserByUserIdAndRoleId(long userId, long roleId);
	
//	@Query("SELECT u, r, p, p.permissionDetails FROM User u JOIN u.roles r JOIN r.permissions p  WHERE u.userId = ?1 AND p.permissionId =?2")
//	List<Object> getAllUserByUserIdAndPerId(long userId, long perId);

//	@Query("SELECT u FROM User u JOIN u.roles r JOIN r.permissions p  WHERE u.userId = ?1 AND p.permissionId =?2")
//	User getAllUserByUserIdAndPerId(long userId, long perId);

	
	
}