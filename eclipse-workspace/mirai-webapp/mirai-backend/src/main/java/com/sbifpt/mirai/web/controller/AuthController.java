package com.sbifpt.mirai.web.controller;

import java.io.UnsupportedEncodingException;
import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sbifpt.mirai.web.dto.entity.Project;
import com.sbifpt.mirai.web.dto.request.LoginRequest;
import com.sbifpt.mirai.web.dto.request.SignupRequest;
import com.sbifpt.mirai.web.repository.ProjectRepository;
import com.sbifpt.mirai.web.service.UserDetailsImpl;
import com.sbifpt.mirai.web.service.UserServices;

@RestController
@RequestMapping("/api")
public class AuthController {

	@Autowired
	private UserServices userService;
	
	@Autowired
	private ProjectRepository projectRepository;

	/**
	 * Login localhost:8091/api/signin
	 * 
	 * @return user as JSON
	 * @throws UnsupportedEncodingException
	 * @throws JSONException
	 */
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(HttpServletResponse response,
			 @Valid @RequestBody LoginRequest loginRequest) throws UnsupportedEncodingException {

		ResponseEntity<?> loginUser = userService.signin(response, loginRequest);

		return loginUser;
	}

	/**
	 * Register localhost:8091//api/signup
	 * 
	 * @return user as JSON
	 */
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {

		ResponseEntity<?> registerUser = userService.registerUser(signUpRequest);

		return registerUser;
	}

	/**
	 * 
	 * Api check authorizated
	 * 
	 */
	@GetMapping("/auth/all")
	public String allAccess() {
		return "Public Content.";
	}

	@GetMapping("/auth/user")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public String userAccess() {
		return "User Content.";
	}

	@GetMapping("/auth/mod")
	@PreAuthorize("hasRole('MODERATOR')")
	public String moderatorAccess() {
		return "Moderator Board.";
	}

	@GetMapping("/auth/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Admin Board.";
	}
	
	// Role Admin, Pm có quyền truy cập url  
	@PreAuthorize("hasRole('ADMIN') or hasRole('PRODUCTMANAGER')")
	@RequestMapping(value = {"/auth/admin/members", "/auth/product-manager/members"}, method = RequestMethod.GET)
	public String adminAndProductManager() {
		return "ADMIN AND PRODUCT MANAGER";
	}
	
//	@PreAuthorize("hasRole('ADMIN') or hasRole('PROJECTMANAGER')")
	@RequestMapping(value = "/auth/projects", method = RequestMethod.GET)
	public ResponseEntity<?> findAllProjectByUserId(Principal principal) {
		UserDetailsImpl loginedUser = (UserDetailsImpl) ((Authentication) principal).getPrincipal();
		long userId = loginedUser.getId();
		System.err.println("User ID: " + userId);
		List<Project> listProject = projectRepository.findAllProjectByUserId(userId);
			if(listProject.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			for(Project p : listProject) {
				System.err.println(p.getTitle());

			}
			return new ResponseEntity<>(listProject, HttpStatus.OK);
	
	}
	


}