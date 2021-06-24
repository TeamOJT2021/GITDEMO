package com.sbifpt.mirai.web.dto.entity;

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

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "type_tasks")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TypeTask implements java.io.Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private Long id;
	@Column(name = "name", length = 50)

	private String name;
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "typeTasks")

	private Set<Task> taskses = new HashSet<Task>(0);

}
