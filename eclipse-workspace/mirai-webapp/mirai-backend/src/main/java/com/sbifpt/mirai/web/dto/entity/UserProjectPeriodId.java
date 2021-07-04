package com.sbifpt.mirai.web.dto.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UserProjectPeriodId implements Serializable{
	@Column(name = "user_id", nullable = false)
	private int userId;
	
	@Column(name = "project_id", nullable = false)
	private int projectId;
	
	@Column(name = "period_id", nullable = false)
	private int periodId;
}
