package com.sbifpt.mirai.web.exception;

/**
 * Extends RuntimeException to throw message or caurse (User)
 * 
 */

public class UnAuthorizedException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	String message;

	public UnAuthorizedException() {
		super();
	}

	public UnAuthorizedException(String message) {
		super(message);
		this.message = message;
	}
}
