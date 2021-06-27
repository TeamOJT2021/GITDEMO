package com.sbifpt.mirai.web.dto.entity;
// Generated Jun 27, 2021 11:09:08 PM by Hibernate Tools 4.3.1

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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Tasks generated by hbm2java
 */
@Entity
@Table(name = "tasks")
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Task implements java.io.Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "id", unique = true, nullable = false)
	private Long id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "project_id")
	private Project projects;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "type_task_id")
	private TypeTask typeTasks;
	
	@Column(name = "content")
	private String content;
	
	@Column(name = "achieved")
	private Boolean achieved;
	
	@Column(name = "note")
	private String note;
	
	@Column(name = "score", precision = 18, scale = 0)
	private Long score;
	
	@Column(name = "status")
	private Boolean status;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_at", length = 23)
	private Date createdAt;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "update_at", length = 23)
	private Date updateAt;

}
