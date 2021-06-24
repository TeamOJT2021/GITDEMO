package com.sbifpt.mirai.web.dto.entity;

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
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User implements java.io.Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private Long id;
	@Column(name = "first_name", length = 50)

	private String firstName;
	@Column(name = "last_name", length = 50)

	private String lastName;
	@Column(name = "username", length = 50)

	private String username;
	@Column(name = "password")

	private String password;
	@Column(name = "gender")

	private Boolean gender;
	@Column(name = "phone", length = 20)

	private String phone;
	@Column(name = "enable")

	private Boolean enable;
	@Column(name = "visibility")

	private Boolean visibility;

	@Column(name = "thumbnail")
	private String thumbnail;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_at", length = 23)
	private Date createdAt;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "updated_at", length = 23)
	private Date updatedAt;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "users")
	private Set<UserRoleProject> usersRolesProjectses = new HashSet<UserRoleProject>(0);
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "users")
	private Set<Email> emailses = new HashSet<Email>(0);

	@Builder
	public User(String username, String firstname, String password) {
		super();
		this.firstName = username;
		this.firstName = firstname;
		this.password = password;
	}
}
