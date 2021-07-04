package com.sbifpt.mirai.web.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class FindAllTaskReq {
	
	private Long userId;
	private Long projectId;
	private Long periodId;
	private String date;
	
}
