package com.sbifpt.mirai.web.dto.entity;

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

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "projects")
@Data
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

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "projects")
	private Set<Task> taskses = new HashSet<Task>(0);

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "projects")
	private Set<UserRoleProject> usersRolesProjectses = new HashSet<UserRoleProject>(0);

}
