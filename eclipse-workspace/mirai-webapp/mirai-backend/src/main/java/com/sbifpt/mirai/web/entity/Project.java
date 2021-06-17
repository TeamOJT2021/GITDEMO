package com.sbifpt.mirai.web.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
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
public class Project implements java.io.Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "projectId", unique = true, nullable = false)
	private long projectId;
	@Column(name = "title")
	private String title;
	@Column(name = "description")
	private String description;
	@Column(name = "duration")
	private int duration;
	@Column(name = "startDate")
	private Date startDate;
	@Column(name = "endDate")
	private Date endDate;
	@Column(name = "status")
	private boolean status;
	@Column(name = "rating")
	private double rating;
	@Column(name = "visibility")
	private boolean visibility;
	@Column(name = "createdAt")
	private Date createdAt;
	@Column(name = "updatedAt")
	private Date updatedAt;
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "projects")
	private Set<Task> tasks = new HashSet<>();

	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "projects")
	private Set<User> users = new HashSet<>();

}