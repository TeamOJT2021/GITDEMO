package com.sbifpt.mirai.web.dto.entity;
// Generated Jun 27, 2021 11:09:08 PM by Hibernate Tools 4.3.1

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * UsersRolesProjectsId generated by hbm2java
 */
@Embeddable
public class UserProjectId implements java.io.Serializable {

	@Column(name = "project_id", nullable = false)
	private int projectId;
	@Column(name = "user_id", nullable = false)
	private int userId;


}
