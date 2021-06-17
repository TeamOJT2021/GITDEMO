package com.sbifpt.mirai.web.exception;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

/**
 * Throw exception return as JSON
 */
@RestControllerAdvice
public class ApiHandleException {
	/**
	 * Throw exception user not found
	 */
	@ExceptionHandler(ResourceNotFoundException.class)
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	public ResponseEntity<ApiResponseException> resourceNotFoundException(ResourceNotFoundException ex,
			WebRequest request) {
		ApiResponseException message = new ApiResponseException(HttpStatus.NOT_FOUND.value(), new Date(),
				ex.getMessage(), request.getDescription(false));

		return new ResponseEntity<ApiResponseException>(message, HttpStatus.NOT_FOUND);
	}

	/**
	 * Throw exception server error
	 */
	@ExceptionHandler(Exception.class)
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	public ResponseEntity<ApiResponseException> globalExceptionHandler(Exception ex, WebRequest request) {
		ApiResponseException message = new ApiResponseException(HttpStatus.INTERNAL_SERVER_ERROR.value(), new Date(),
				ex.getMessage(), request.getDescription(false));

		return new ResponseEntity<ApiResponseException>(message, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	/**
	 * Throw exception user authorized exception
	 */
	@ExceptionHandler(UnAuthorizedException.class)
	@ResponseStatus(value = HttpStatus.UNAUTHORIZED)

	public ResponseEntity<ApiResponseException> handleCustomException(UnAuthorizedException ex, WebRequest request) {
		ApiResponseException message = new ApiResponseException(HttpStatus.UNAUTHORIZED.value(), new Date(),
				ex.getMessage(), request.getDescription(false));

		return new ResponseEntity<ApiResponseException>(message, HttpStatus.UNAUTHORIZED);

	}

	/**
	 * Throw exception user
	 */
	@ExceptionHandler(BadRequestException.class)
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	public ResponseEntity<ApiResponseException> handleCustomException(BadRequestException ex, WebRequest request) {
		ApiResponseException message = new ApiResponseException(HttpStatus.BAD_REQUEST.value(), new Date(),
				ex.getMessage(), request.getDescription(false));

		return new ResponseEntity<ApiResponseException>(message, HttpStatus.BAD_REQUEST);

	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ResponseEntity<ApiResponseException> handleValidationExceptions(MethodArgumentNotValidException ex,
			WebRequest request) {
//		List<String> errors = new ArrayList<>();
		Map<String, String> errors = new HashMap<>();

		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
//			errors.add(errorMessage);

		});
		System.err.println(errors.toString());

		ApiResponseException message = new ApiResponseException(HttpStatus.BAD_REQUEST.value(), new Date(),
				 request.getDescription(false), errors);
		return new ResponseEntity<ApiResponseException>(message, HttpStatus.BAD_REQUEST);
	}
}
