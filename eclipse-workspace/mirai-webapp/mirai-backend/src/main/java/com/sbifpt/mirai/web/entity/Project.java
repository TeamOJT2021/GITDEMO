package com.sbifpt.mirai.web.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "projects")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private long projectId;
	@Column(name = "title", length = 64, nullable = false)
	private String title;
	@Column(name = "description", columnDefinition = "TEXT", nullable = false)
	private String description;
	@Column(name = "status", nullable = false)
	private boolean status;
	@Column(name = "rating", nullable = false)
	private double rating;
	@Column(name = "visibility", nullable = false)
	private boolean visibility;
	@Column(name = "startDate", nullable = false)
	private Date startDate;
	@Column(name = "endDate", nullable = false)
	private Date endDate;
	@Column(name = "createdAt", nullable = false)
	private Date createdAt;
	@Column(name = "updatedAt", nullable = false)
	private Date updatedAt;

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "projects")
	private Set<Task> tasks = new HashSet<>();

	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "projects")
	private Set<User> users = new HashSet<>();

}