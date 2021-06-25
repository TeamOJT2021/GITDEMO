package com.sbifpt.mirai.web.dto.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UsersRolesProjectsId implements java.io.Serializable {
	
	@Column(name = "project_id", nullable = false)
	private int projectId;
	
	@Column(name = "user_id", nullable = false)
	private int userId;


}
