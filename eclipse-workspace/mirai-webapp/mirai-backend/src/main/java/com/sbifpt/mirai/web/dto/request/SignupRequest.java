package com.sbifpt.mirai.web.dto.request;

import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SignupRequest {

	@NotBlank(message = "Username is mandatory")
	@Size(min = 3, max = 20)
	private String username;
	@NotBlank(message = "Email is mandatory")
	@Size(max = 50)
	@Email(message ="Email is not match format")
	private String email;
	private Set<String> role;
	@NotBlank(message = "Password is mandatory")
	@Size(min = 6, max = 40)
	private String password;

}