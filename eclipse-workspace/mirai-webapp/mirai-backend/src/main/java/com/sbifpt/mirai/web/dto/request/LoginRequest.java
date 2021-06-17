package com.sbifpt.mirai.web.dto.request;

import java.util.Collection;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class LoginRequest {
	@NotBlank(message = "Username is mandatory")
	private String username;
//	@NotBlank(message = "Email is mandatory")
//	@Size(max = 50)
//	@Email(message ="Email is not match format")
//	private String email;
	@NotBlank(message = "Password is mandatory")
	private String password;

	private Collection<GrantedAuthority> authorities;

	
	
	
}