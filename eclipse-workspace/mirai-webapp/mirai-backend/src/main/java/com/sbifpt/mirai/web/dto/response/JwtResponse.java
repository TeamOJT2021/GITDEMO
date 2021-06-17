package com.sbifpt.mirai.web.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 
 * Object login will response properties
 *
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {
	private String accessToken;
	private String type = "Bearer";
	private Long id;
	private String username;
	private String email;
	private List<String> roles;

	@Builder
	public JwtResponse(String accessToken, String username, List<String> roles) {
		this.accessToken = accessToken;
		this.username = username;
		this.roles = roles;
	}
	
	@Builder
	public JwtResponse(String accessToken, String username, String email, List<String> roles) {
		this.accessToken = accessToken;
		this.username = username;
		this.email = email;
		this.roles = roles;
	}

	@Builder
	public JwtResponse(Long id, String accessToken, String email, List<String> roles) {
		this.id = id;
		this.accessToken = accessToken;
		this.email = email;
		this.roles = roles;
	}

	
	@Builder
	public JwtResponse(Long id, String accessToken, String username, String email, List<String> roles) {
		this.id = id;
		this.accessToken = accessToken;
		this.username = username;
		this.email = email;
		this.roles = roles;
	}

	@Override
	public String toString() {
		return "JwtResponse [accessToken=" + accessToken + ", type=" + type + ", username=" + username + ", roles="
				+ roles + "]";
	}

}