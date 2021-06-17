package com.sbifpt.mirai.web.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "permission_detail")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PermissionDetail implements java.io.Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private long permissionDetailId;
	@Column(name = "actionName")
	private String actionName;
	@Column(name = "actionCode")
	private String actionCode;
	@Column(name = "checkAction")
	private boolean checkAction;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "permissionId", nullable = false)
	private Permission permissions;
	
	
}
