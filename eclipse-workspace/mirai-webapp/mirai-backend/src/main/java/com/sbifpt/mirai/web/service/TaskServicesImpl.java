package com.sbifpt.mirai.web.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbifpt.mirai.web.dto.entity.Task;
import com.sbifpt.mirai.web.repository.TaskRepository;

@Service
public class TaskServicesImpl {

	@Autowired
	private TaskRepository taskRepository;

	public Iterable<Task> getAllTasks() {
		return taskRepository.findAll();
	}

	public Optional<Task> getTaskById(long taskId) {
		return taskRepository.findById(taskId);
	}

	public void saveTask(Task task) {
		taskRepository.save(task);
	}


}
