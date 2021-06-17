package com.sbifpt.mirai.web.exception;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Object when exception
 */
public class ApiResponseException {

	private int statusCode;
	private Date timestamp;
	private String message;
	private String description;
	private Throwable throwAble;
	private Map<String, String> errorValidate;
//	private List<String> errorValidate;

	public ApiResponseException(int statusCode, Date timestamp, String message, String description) {
		this.statusCode = statusCode;
		this.timestamp = timestamp;
		this.message = message;
		this.description = description;
	}

	public ApiResponseException(int statusCode, Date timestamp, String message, String description,
			Throwable throwAble) {
		this.statusCode = statusCode;
		this.timestamp = timestamp;
		this.message = message;
		this.description = description;
		this.throwAble = throwAble;
	}

	public ApiResponseException(int statusCode, Date timestamp, String description,
			Map<String, String> errorValidate) {
		super();
		this.statusCode = statusCode;
		this.timestamp = timestamp;
		this.description = description;
		this.errorValidate = errorValidate;
	}

//	public ApiResponseException(int statusCode, Date timestamp, String message, String description,
//			List<String> errorValidate) {
//		super();
//		this.statusCode = statusCode;
//		this.timestamp = timestamp;
//		this.message = message;
//		this.description = description;
//		this.errorValidate = errorValidate;
//	}

	public int getStatusCode() {
		return statusCode;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public String getMessage() {
		return message;
	}

	public String getDescription() {
		return description;
	}

	public Throwable getThrowAble() {
		return throwAble;
	}

//	public List<String> getErrorValidate() {
//		return errorValidate;
//	}
//
//	public void setErrorValidate(List<String> errorValidate) {
//		this.errorValidate = errorValidate;
//	}

	public Map<String, String> getErrorValidate() {
		return errorValidate;
	}

	public void setErrorValidate(Map<String, String> errorValidate) {
		this.errorValidate = errorValidate;
	}

}
