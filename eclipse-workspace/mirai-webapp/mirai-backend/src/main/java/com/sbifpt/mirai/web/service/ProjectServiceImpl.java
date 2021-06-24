//package com.sbifpt.mirai.web.service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.sbifpt.mirai.web.dto.entity.Project;
//import com.sbifpt.mirai.web.repository.ProjectRepository;
//
//@Service
//public class ProjectServiceImpl {
//
//	@Autowired
//	private ProjectRepository projectRepository;
//
//	public List<Project> getAllProjectByUserId(long userId) {
//		return projectRepository.getAllProjectByUserId(userId);
//	}
//
//	public Optional<Project> findByProjectByProjectIdAndUserId(long projectId, long userId) {
//		return projectRepository.findByProjectByProjectIdAndUserId(projectId, userId);
//	}
//
//	public Project save(Project project) {
//		return projectRepository.save(project);
//	}
//}
