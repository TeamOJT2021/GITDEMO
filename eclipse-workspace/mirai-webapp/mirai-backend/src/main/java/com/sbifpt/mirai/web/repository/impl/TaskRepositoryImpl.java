package com.sbifpt.mirai.web.repository.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sbifpt.mirai.web.dto.entity.Period;
import com.sbifpt.mirai.web.dto.entity.Project;
import com.sbifpt.mirai.web.dto.entity.Task;
import com.sbifpt.mirai.web.dto.entity.User;
import com.sbifpt.mirai.web.repository.custom.TaskRepositoryCustom;

@Repository
@Transactional
public class TaskRepositoryImpl implements TaskRepositoryCustom {

	@Autowired
	private EntityManager em;

	// constructor
	@Override
	public List<Task> findBooksByAuthorNameAndTitle(Long userId, Long projectId, int month, int year) {
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Task> query = cb.createQuery(Task.class);

		Root<Task> task = query.from(Task.class);

		Join<Task, Project> projectJoin = task.join("project", JoinType.INNER);
		Join<Task, Period> periodJoin = task.join("period", JoinType.INNER);
		Join<Task, User> userJoin = task.join("user", JoinType.INNER);

//		Predicate nameTask = cb.like(task.get("content"), "%" + title + "%");
		Predicate idProject = cb.equal(projectJoin.get("id"), projectId);
		Predicate periodForYear = cb.equal(cb.function("YEAR", Integer.class, periodJoin.get("date")), year); 
		Predicate periodForMonth = cb.equal(cb.function("MONTH", Integer.class, periodJoin.get("date")), month);
//		Predicate periodForStatus = cb.equal(periodJoin.get("status"), status); 
		query.orderBy(cb.asc(task.get("id")));
		Predicate idUser = cb.equal(userJoin.get("id"), userId); 

		Predicate pre1 = cb.and(idUser, idProject, periodForMonth, periodForYear);

		query.where(pre1);
		List<Task> taskList = em.createQuery(query).getResultList();
		
		return taskList;
	}

}
