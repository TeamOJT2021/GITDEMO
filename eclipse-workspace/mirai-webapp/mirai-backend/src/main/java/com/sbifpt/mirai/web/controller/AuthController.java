package com.sbifpt.mirai.web.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sbifpt.mirai.web.dto.request.LoginRequest;
import com.sbifpt.mirai.web.dto.request.SignupRequest;
import com.sbifpt.mirai.web.entity.Permission;
import com.sbifpt.mirai.web.entity.PermissionDetail;
import com.sbifpt.mirai.web.entity.Role;
import com.sbifpt.mirai.web.entity.User;
import com.sbifpt.mirai.web.service.PermissionDetailServiceImpl;
import com.sbifpt.mirai.web.service.PermissionServiceImpl;
import com.sbifpt.mirai.web.service.UserServices;

@RestController
@RequestMapping("/api")
public class AuthController {

	@Autowired
	private UserServices userService;

	@Autowired
	private  PermissionServiceImpl permissionServiceImpl;
	
	@Autowired
	private  PermissionDetailServiceImpl permissionDetailServiceImpl;
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
	
	@GetMapping("/auth/members")
	public ResponseEntity<?> auth() {
//		List<Permission> listPer = permissionServiceImpl.find(1, 2);
		List<User> listUser = userService.getAllUserByRoleIdAndPerId(2, 1);
		for(User u : listUser) {
			System.err.println("List user: " + u.getUserId());
			for(Role r: u.getRoles()) {
				for(Permission p: r.getPermissions()) {
					List<PermissionDetail> listPerDetail = permissionDetailServiceImpl.getAllPerDetailByPerId(p.getPermissionId());
					for(PermissionDetail pd: listPerDetail) {
						System.err.println("Permission of" + u.getFirstName() + "with Role ID: " + r.getRoleId() + "" + pd.getActionCode());
					}
				}
			}
		}
		

		return new ResponseEntity<>(listUser, HttpStatus.OK);

	}	


}