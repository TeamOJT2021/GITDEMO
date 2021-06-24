package com.sbifpt.mirai.web.dto.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "emails")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Email implements java.io.Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User users;

	@Column(name = "verification_token")
	private String verificationToken;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "expired_at", length = 23)
	private Date expiredAt;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "updated_at", length = 23)
	private Date updatedAt;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_at", length = 23)
	private Date createdAt;

}
