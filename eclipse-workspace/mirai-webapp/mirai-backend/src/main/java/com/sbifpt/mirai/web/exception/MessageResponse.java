package com.sbifpt.mirai.web.exception;

public class MessageResponse extends RuntimeException {
	private static final long serialVersionUID = 1L;
	String message;

	public MessageResponse() {
		super();
	}

	public MessageResponse(String message) {
		super(message);
		this.message = message;
	}
}
