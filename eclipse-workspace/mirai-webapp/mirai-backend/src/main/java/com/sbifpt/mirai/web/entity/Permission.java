package com.sbifpt.mirai.web.entity;

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
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "permissions")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Permission implements java.io.Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "permissionId", unique = true, nullable = false)
	private long permissionId;
	@Column(name = "name")
	private String name;
	
	@JsonIgnore
	@Transient
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "permissions")
	private Set<PermissionDetail> permissionDetails = new HashSet<>(0);
	
//	@JsonIgnore
//	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//	@JoinTable(name = "roles_permissions", joinColumns = @JoinColumn(name = "role_id"), inverseJoinColumns = @JoinColumn(name = "permission_id"))
//	private Set<Role> roles = new HashSet<>();
	
	
	
}
