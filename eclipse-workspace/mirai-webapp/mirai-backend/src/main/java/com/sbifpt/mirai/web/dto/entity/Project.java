package com.sbifpt.mirai.web.dto.entity;
// Generated Jun 27, 2021 11:09:08 PM by Hibernate Tools 4.3.1

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Projects generated by hbm2java
 */
@Entity
@Table(name = "projects")
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Project implements java.io.Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "id", unique = true, nullable = false)
	private Long id;
	@Column(name = "title")

	private String title;
	
	@Column(name = "description")
	private Serializable description;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "start_date", length = 23)
	private Date startDate;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "end_date", length = 23)
	private Date endDate;
	
	@Column(name = "rating", precision = 18, scale = 0)
	private Long rating;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "updated_at", length = 23)
	private Date updatedAt;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_at", length = 23)
	private Date createdAt;
	
	@Column(name = "status")
	private Boolean status;
	
	@Column(name = "visibility")
	private Boolean visibility;
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "project")
	private Set<Task> tasks = new HashSet<Task>(0);
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "project")
	private Set<UserRoleProject> usersRolesProjects = new HashSet<UserRoleProject>(0);
	

}
