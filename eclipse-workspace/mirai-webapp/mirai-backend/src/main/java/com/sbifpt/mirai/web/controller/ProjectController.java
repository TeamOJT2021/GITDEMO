package com.sbifpt.mirai.web.controller;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sbifpt.mirai.web.entity.Project;
import com.sbifpt.mirai.web.exception.ResourceNotFoundException;
import com.sbifpt.mirai.web.exception.UnAuthorizedException;
import com.sbifpt.mirai.web.service.ProjectServiceImpl;
import com.sbifpt.mirai.web.service.UserDetailsImpl;

@RestController
@RequestMapping("/api/auth")
public class ProjectController {

	@Autowired
	private ProjectServiceImpl projectServiceImpl;
	/**
	 * /api/auth/projects/{id}
	 * @param id (User ID)
	 * @return
	 */
	@PreAuthorize("hasRole('ADMIN') or hasRole('PRODUCTMANAGER')")
	@RequestMapping(value = "projects/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> projects(@PathVariable("id") long id) {

		List<Project> listProject = projectServiceImpl.getAllProjectByUserId(id);

		if (listProject.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

		return new ResponseEntity<>(listProject, HttpStatus.OK);
	}
	
	/**
	 * /api/auth/projects/{projectId}
	 * @param principal
	 * @param projectId
	 * @param project
	 * @return
	 */
	@PreAuthorize("hasRole('PRODUCTMANAGER')")
	@RequestMapping(value = "projects/{projectId}", method = RequestMethod.PUT)
	public ResponseEntity<?> editProject(Principal principal, @PathVariable("projectId") long projectId,
			@RequestBody Project project) {
		UserDetailsImpl loginedUser = (UserDetailsImpl) ((Authentication) principal).getPrincipal();
		long userId = loginedUser.getId();
		System.err.println("User ID: " + userId);
		Optional<Project> projectData = projectServiceImpl.findByProjectByProjectIdAndUserId(projectId, userId);
		if (loginedUser.isAuthenticated()) {
			if (projectData.isPresent()) {
				Project _project = projectData.get();
				_project.setTitle(project.getTitle());
				_project.setDescription(project.getDescription());
				_project.setDuration(project.getDuration());
				_project.setStartDate(project.getStartDate());
				_project.setEndDate(project.getEndDate());
				_project.setStatus(project.isStatus());
				_project.setRating(project.getRating());
				_project.setVisibility(project.isVisibility());
				_project.setCreatedAt(project.getCreatedAt());
				_project.setUpdatedAt(project.getUpdatedAt());
				return new ResponseEntity<>(projectServiceImpl.save(_project), HttpStatus.OK);
			} else {
				throw new ResourceNotFoundException("Not found Project with id = " + projectId);
			}
		} else {
			throw new UnAuthorizedException("You do not have access");
		}

	}
	
	
}
