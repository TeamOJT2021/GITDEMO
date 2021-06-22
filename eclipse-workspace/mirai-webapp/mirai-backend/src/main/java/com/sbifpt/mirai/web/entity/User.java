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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "users")
@Data 
@AllArgsConstructor
@NoArgsConstructor
@ToString 
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private long userId;
	@Column(name = "firstName", length = 64,nullable = false)
	private String firstName;
	@Column(name = "lastName",length = 64,nullable = false)
	private String lastName;
	@Column(name = "email",length = 64,nullable = false)
	private String email;
	@Column(name = "password",length = 64,nullable = false)
	private String password;
	@Column(name = "gender",nullable = false)
	private boolean gender;
	@Column(name = "avatar",length = 64,nullable = false)
	private String avatar;
	@Column(name = "phone",length = 16,nullable = false)
	private String phone;
	@Column(name = "enabled",nullable = false)
	private boolean enabled;
	@Column(name = "createdAt",nullable = false)
	private Date createdAt;
	@Column(name = "updatedAt",nullable = false)
	private Date updatedAt;

	@Builder
	public User(String username, String email, String password) {
		super();
		this.firstName = username;
		this.email = email;
		this.password = password;
	}

	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "users_projects", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "project_id"))
	private Set<Project> projects = new HashSet<>();
}
