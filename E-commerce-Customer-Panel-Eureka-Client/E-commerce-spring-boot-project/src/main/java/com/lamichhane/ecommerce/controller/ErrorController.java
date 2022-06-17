package com.lamichhane.ecommerce.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.lamichhane.ecommerce.exception.classes.ErrorResponse;
import com.lamichhane.ecommerce.exception.classes.StandardRestErrorResponse;

@RestController
@RequestMapping("error")
public class ErrorController {
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@GetMapping("/bad-request")
	public ErrorResponse get400Error(){
		return new ErrorResponse(HttpStatus.BAD_REQUEST.value(),
				"BAD REQUEST",
				System.currentTimeMillis());
	}
	
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@GetMapping("/unauthorized")
	public ErrorResponse get401Error(){
		return new ErrorResponse(HttpStatus.UNAUTHORIZED.value(),
				"UnAuthorized",
				System.currentTimeMillis());
		}

	@ResponseStatus(HttpStatus.NOT_FOUND)
	@GetMapping("/not-found")
	public ErrorResponse get404Error(){
		return new ErrorResponse(HttpStatus.NOT_FOUND.value(),
				"Not Found",
				System.currentTimeMillis());
	}

	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@GetMapping("/server-error")
	public ErrorResponse get500Error(){
		return new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
				"Server Error",
				System.currentTimeMillis());
	}

	@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
	@GetMapping("/validation-error")
	public ErrorResponse getValidationError(){
		return new ErrorResponse(HttpStatus.NOT_ACCEPTABLE.value(),
				"Server Error",
				System.currentTimeMillis());
	}

}
