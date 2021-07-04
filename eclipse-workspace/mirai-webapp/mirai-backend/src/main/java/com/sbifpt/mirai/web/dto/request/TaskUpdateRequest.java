package com.sbifpt.mirai.web.dto.request;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TaskUpdateRequest {
	
	private List<TaskDetailReq> taskList;
	
	private Long userId;
	
	private Long projectId;
	
	private String date;
	

}
