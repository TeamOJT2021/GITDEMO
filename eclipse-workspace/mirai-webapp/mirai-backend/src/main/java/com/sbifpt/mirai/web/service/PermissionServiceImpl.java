package com.sbifpt.mirai.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbifpt.mirai.web.entity.Permission;
import com.sbifpt.mirai.web.repository.PermissionRepository;

@Service
public class PermissionServiceImpl {

	@Autowired
	private PermissionRepository permissionRepository;
	
	public List<Permission> find(long userId, long roleId){
		return permissionRepository.find(userId, roleId);
	}
}
