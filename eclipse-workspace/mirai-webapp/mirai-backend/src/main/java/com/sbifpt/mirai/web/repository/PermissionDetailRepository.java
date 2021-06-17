package com.sbifpt.mirai.web.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.entity.Permission;
import com.sbifpt.mirai.web.entity.PermissionDetail;

@Repository
public interface PermissionDetailRepository extends JpaRepository<PermissionDetail, Long>{

	@Query("SELECT pd FROM PermissionDetail pd WHERE pd.permissions.permissionId = ?1")
	List<PermissionDetail> getAllPerDetailByPerId(long perId);
}
