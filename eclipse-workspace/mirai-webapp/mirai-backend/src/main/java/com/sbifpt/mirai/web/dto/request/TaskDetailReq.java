package com.sbifpt.mirai.web.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TaskDetailReq {
	
	private Long id;
	
	private String content;
	
	private Boolean achieved;
	
	private String note;
	
	private String typeTask;

}
