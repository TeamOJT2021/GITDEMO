package com.sbifpt.mirai.web.controller;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sbifpt.mirai.web.entity.Project;
import com.sbifpt.mirai.web.exception.ResourceNotFoundException;
import com.sbifpt.mirai.web.exception.UnAuthorizedException;
import com.sbifpt.mirai.web.service.EmailServiceImpl;
import com.sbifpt.mirai.web.service.ProjectServiceImpl;
import com.sbifpt.mirai.web.service.UserDetailsImpl;

import net.bytebuddy.utility.RandomString;

@RestController
@RequestMapping("/api/auth")
public class ProjectController {

	@Autowired
	private EmailServiceImpl emailServiceImpl;

	@Autowired
	private ProjectServiceImpl projectServiceImpl;

	/**
	 * /api/auth/projects/{id}
	 * 
	 * @param id (User ID)
	 * @return
	 * @throws MessagingException
	 */
	@RequestMapping(value = "/projects", method = RequestMethod.GET)
	public ResponseEntity<?> projects(Principal principal, HttpServletRequest request) throws MessagingException {
		String randomString = RandomString.make(32);

		UserDetailsImpl loginedUser = (UserDetailsImpl) ((Authentication) principal).getPrincipal();
		long userId = loginedUser.getId();
		String email = loginedUser.getEmail();
		System.err.println("User ID: " + userId);
		if (loginedUser.isAuthenticated()) {
			List<Project> listProject = projectServiceImpl.getAllProjectByUserId(userId);
			String url = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
					+ request.getContextPath() + "/verify?email=" + email + "&code=" + randomString;
			emailServiceImpl.sendMailToActiveAccount(email, url);
			if (listProject.isEmpty()) {
				throw new ResourceNotFoundException("Not found Project with userId = " + userId);
			}
			return new ResponseEntity<>(listProject, HttpStatus.OK);
		} else {
			throw new UnAuthorizedException("Access is denied");
		}

	}

	/**
	 * /api/auth/projects/{projectId}
	 * 
	 * @param principal
	 * @param projectId
	 * @param project
	 * @return
	 */
	@RequestMapping(value = "/projects/{projectId}", method = RequestMethod.PUT)
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
				_project.setStartDate(project.getStartDate());
				_project.setEndDate(project.getEndDate());
				_project.setStatus(project.isStatus());
				_project.setRating(project.getRating());
				_project.setVisibility(project.isVisibility());
				_project.setCreatedAt(project.getCreatedAt());
				_project.setUpdatedAt(project.getUpdatedAt());
				return new ResponseEntity<>(projectServiceImpl.save(_project), HttpStatus.OK);
			} else {
				System.err.println("Run auth");
				if (projectData.get().getProjectId() != projectId) {
					System.err.println("Run not found");
					throw new ResourceNotFoundException("Not found Project with id = " + projectId);
				}
				throw new UnAuthorizedException("Access is denied");
			}
		} else {
			throw new UnAuthorizedException("Access is denied");
		}

	}

}
