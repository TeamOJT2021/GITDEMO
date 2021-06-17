package com.sbifpt.mirai.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sbifpt.mirai.web.entity.User;
//import com.sbifpt.mirai.web.dto.entity.User;
import com.sbifpt.mirai.web.exception.ResourceNotFoundException;
import com.sbifpt.mirai.web.repository.UserRepository;


/**
 * 
 * Authorization by name UserDetail
 *
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserRepository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByFirstName(username);
				if(user != null) {
					return UserDetailsImpl.build(user);
				}
		throw new ResourceNotFoundException("User is not exit.");
	}

	
	

}