package com.sbifpt.mirai.web.controller;

import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Month;
import java.time.Period;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.LongStream;
import java.util.stream.Stream;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.joda.time.DateTime;
import org.joda.time.Months;
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

import com.sbifpt.mirai.web.common.enumm.TypeTaskEnum;
import com.sbifpt.mirai.web.dto.entity.Task;
import com.sbifpt.mirai.web.dto.entity.TypeTask;
import com.sbifpt.mirai.web.dto.request.LoginRequest;
import com.sbifpt.mirai.web.dto.request.SignupRequest;
import com.sbifpt.mirai.web.dto.request.TaskDetailReq;
import com.sbifpt.mirai.web.dto.request.TaskUpdateRequest;
import com.sbifpt.mirai.web.repository.PeriodRepository;
import com.sbifpt.mirai.web.repository.ProjectRepository;
import com.sbifpt.mirai.web.repository.TaskRepository;
import com.sbifpt.mirai.web.repository.TypeTaskRepository;
import com.sbifpt.mirai.web.repository.impl.TaskRepositoryImpl;
import com.sbifpt.mirai.web.service.UserServices;

@RestController
@RequestMapping("/api")
public class TestController {

	@Autowired
	private UserServices userService;

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private PeriodRepository periodRepository;

	@Autowired
	private TaskRepository taskRepository;

	@Autowired
	private TypeTaskRepository typeTaskRepository;

	@Autowired
	private TaskRepositoryImpl taskRepositoryImpl;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(HttpServletResponse response,
			@Valid @RequestBody LoginRequest loginRequest) throws UnsupportedEncodingException {

		ResponseEntity<?> loginUser = userService.signin(response, loginRequest);

		return loginUser;
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {

		ResponseEntity<?> registerUser = userService.registerUser(signUpRequest);

		return registerUser;
	}

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

	@RequestMapping(value = { "/auth/admin/members", "/auth/product-manager/members" }, method = RequestMethod.GET)
	public String adminAndProductManager() {
		return "ADMIN AND PRODUCT MANAGER";
	}

	@RequestMapping(value = "/auth/test/projects", method = RequestMethod.PUT)
	public ResponseEntity<?> findAllProjectByUserId(TaskUpdateRequest taskUpdateRequest) throws ParseException {

		
		List<Long> taskIdListReq = new ArrayList<>(); 
		Map<Long, Object> taskMapList = new HashMap<Long, Object>(); 
		
		SimpleDateFormat formater = new SimpleDateFormat("MMM-yyyy");
		Date date = formater.parse(taskUpdateRequest.getDate());
		DateTime dateOfPeriod = new DateTime(date);
		
			
		for(TaskDetailReq t : taskUpdateRequest.getTaskList()) {
			taskMapList.put(t.getId(), t);
			taskIdListReq.add(t.getId());
		}
		
		List<Task> taskListByTaskListId = taskRepository.findAllById(taskIdListReq);
		
		for(Task task : taskListByTaskListId) {
			System.out.println("Task: " + taskMapList.get(task.getId()));
		}
		
//		TypeTaskEnum typeTaskEnum = null;
//			
//		List<Task> taskList = taskRepositoryImpl.findBooksByAuthorNameAndTitle(taskUpdateRequest.getUserId(), 
//				taskUpdateRequest.getProjectId(), dateOfPeriod.getMonthOfYear(), dateOfPeriod.getYear());
//		
//		TypeTaskEnum t = TypeTaskEnum.valueOf(null);
//		
//		switch (typeTaskEnum) {
//		case MUST_DO_1:
//			break;
//		case MUST_DO_2:
//			break;
//		case MUST_DO_3:
//			break;
//		case MUST_DO_4:
//			break;
//		case COULD_DO_1:
//			break;
//		case SHOULD_DO_1:
//			break;
//		case SOULD_DO_2:
//			break;
//		default:
//			break;
//
//		}
		return new ResponseEntity<>(HttpStatus.OK);

	}

}