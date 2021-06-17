package com.sbifpt.mirai.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbifpt.mirai.web.entity.PermissionDetail;
import com.sbifpt.mirai.web.repository.PermissionDetailRepository;

@Service
public class PermissionDetailServiceImpl {

	@Autowired
	private PermissionDetailRepository permissionDetailRepository;
	
	public List<PermissionDetail> getAllPerDetailByPerId(long perId) {
		return permissionDetailRepository.getAllPerDetailByPerId(perId);
	}
}
