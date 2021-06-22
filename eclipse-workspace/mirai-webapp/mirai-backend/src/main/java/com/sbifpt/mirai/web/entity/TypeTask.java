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

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "types_tasks")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TypeTask{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private long typeTaskId;
	@Column(name = "title", length = 64, nullable = false)
	private String title;

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "types_tasks")
	private Set<Task> tasks = new HashSet<>();
}