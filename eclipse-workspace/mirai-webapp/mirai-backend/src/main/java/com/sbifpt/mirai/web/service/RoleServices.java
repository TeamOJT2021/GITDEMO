package com.sbifpt.mirai.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbifpt.mirai.web.dto.entity.ERole;
import com.sbifpt.mirai.web.entity.Role;
//import com.sbifpt.mirai.web.dto.entity.Role;
import com.sbifpt.mirai.web.repository.RoleRepository;

@Service
public class RoleServices {


	@Autowired
	private RoleRepository roleRepository;

	public Role findByName(ERole name) {
		return roleRepository.findByName(name);
	};

	
}
