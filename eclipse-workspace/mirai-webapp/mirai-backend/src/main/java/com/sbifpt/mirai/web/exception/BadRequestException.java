package com.sbifpt.mirai.web.exception;

public class BadRequestException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	String message;

	public BadRequestException() {
		super();
	}

	public BadRequestException(String message) {
		super(message);
		this.message = message;
	}
}
