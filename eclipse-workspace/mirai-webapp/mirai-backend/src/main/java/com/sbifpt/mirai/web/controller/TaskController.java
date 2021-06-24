//package com.sbifpt.mirai.web.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.sbifpt.mirai.web.dto.entity.Task;
//import com.sbifpt.mirai.web.repository.TaskRepository;
//
//@RestController
//@RequestMapping("/api/auth")
//public class TaskController {
//	
//	@Autowired
//	private TaskRepository taskRepository;
//	
//	@GetMapping("/tasks")
//	public ResponseEntity<?> getAllTask(){
//		
//		List<Task> tasks = taskRepository.getAllTaskByUserIdAndProjectId("Son", 8, 1);
//		
//		return new ResponseEntity<>(tasks ,HttpStatus.OK);
//	}
//
//}
