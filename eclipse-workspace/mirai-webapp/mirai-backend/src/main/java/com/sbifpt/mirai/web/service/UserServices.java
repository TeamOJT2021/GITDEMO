package com.sbifpt.mirai.web.service;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.handler.UserRoleAuthorizationInterceptor;

import com.sbifpt.mirai.web.common.utils.ToJSON;
import com.sbifpt.mirai.web.dto.entity.ERole;
import com.sbifpt.mirai.web.dto.entity.Role;
import com.sbifpt.mirai.web.dto.entity.User;
import com.sbifpt.mirai.web.dto.entity.UserRoleProject;
//import com.sbifpt.mirai.web.dto.entity.Role;
//import com.sbifpt.mirai.web.dto.entity.User;
import com.sbifpt.mirai.web.dto.request.LoginRequest;
import com.sbifpt.mirai.web.dto.request.SignupRequest;
import com.sbifpt.mirai.web.dto.response.JwtResponse;
import com.sbifpt.mirai.web.exception.BadRequestException;
import com.sbifpt.mirai.web.exception.MessageResponse;
import com.sbifpt.mirai.web.repository.RoleRepository;
import com.sbifpt.mirai.web.repository.UserRepository;
import com.sbifpt.mirai.web.repository.UserRoleProjectRepository;
import com.sbifpt.mirai.web.security.jwt.JwtUtils;

@Service
public class UserServices {

	private static final String COOKIE_BEARER = "COOKIE_BEARER";

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private UserRoleProjectRepository userRoleProjectRepository;

	public Boolean existsByUsername(String username) {
		return userRepository.existsByFirstName(username);

	};

	public ResponseEntity<?> signin(HttpServletResponse response, @Valid @RequestBody LoginRequest loginRequest)
			throws UnsupportedEncodingException {
		if (loginRequest.getUsername().equals("") || loginRequest.getPassword().equals("")) {
			throw new BadRequestException("Please enter field complete");
		}
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());
		String str = ToJSON.objectToString(new JwtResponse(jwt, userDetails.getUsername(), roles));
		System.out.println("Convert Object to Str: " + removeFirstandLast(str));
		Cookie cookie = new Cookie(COOKIE_BEARER, "{" + URLEncoder.encode(removeFirstandLast(str), "utf-8") + "}");
		cookie.setHttpOnly(false);
		cookie.setPath("/");
		cookie.setMaxAge(7 * 24 * 60 * 60);
		cookie.setComment("Check request by JWT");
		response.addCookie(cookie);
		return ResponseEntity.ok(
				new JwtResponse(userDetails.getId(), jwt, userDetails.getUsername(), userDetails.getEmail(), roles));
	}

	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
//		if (userRepository.existsByFirstName(signUpRequest.getUsername())) {
//			throw new BadRequestException("Username is already exit!");
//		}
		if (userRepository.existsByUsername(signUpRequest.getEmail())) {
			throw new BadRequestException("Email is already in use!");
		}
		if (signUpRequest.getUsername().equals("") || signUpRequest.getEmail().equals("")
				|| signUpRequest.getPassword().equals("")) {
			throw new BadRequestException("Please enter field complete");
		}

		User user = new User(signUpRequest.getUsername(), signUpRequest.getEmail(),
				passwordEncoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<UserRoleProject> userRoleProject = new HashSet<>();
		UserRoleProject roleForUser = new UserRoleProject();
		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER);
			roleForUser.setRoles(userRole);

		} else {
			System.err.println("ROLE: " + strRoles);

			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN);
					System.err.println(adminRole.getName());
					roleForUser.setRoles(adminRole);
					userRoleProjectRepository.save(roleForUser);
					break;
				case "mod":
					Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR);
					System.err.println(modRole.getName());
					roleForUser.setRoles(modRole);
					userRoleProjectRepository.save(roleForUser);
					break;
				case "pm":
					System.err.println("Run");
					Role pmRole = roleRepository.findByName(ERole.ROLE_PRODUCTMANAGER);
					System.err.println("Xi bua:" + pmRole.getName());
					roleForUser.setRoles(pmRole);
					userRoleProjectRepository.save(roleForUser);

					break;
				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER);
					System.err.println(userRole.getName());
					roleForUser.setRoles(userRole);
					userRoleProjectRepository.save(roleForUser);

				}
			});
		}

		userRoleProject.add(roleForUser);
		user.setUsersRolesProjectses(userRoleProject);
		User u = userRepository.save(user);
		System.err.println(u.getId());
		User userById = userRepository.findByUserId(u.getId());
		roleForUser.setUsers(userById);
		userRoleProject.add(roleForUser);
		user.setUsersRolesProjectses(userRoleProject);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully! Please confirm mail to login"));
	}

	public static String removeFirstandLast(String str) {

		StringBuilder sb = new StringBuilder(str);
		sb.deleteCharAt(str.length() - 1);
		sb.deleteCharAt(0);

		return sb.toString();
	}

}
