package com.sjy.blog.service.exception;

public class UserNotFoundException extends RuntimeException {
	
	private String email;
	
	public UserNotFoundException(String email) {
		super("Could not find user with email : " + email);
		this.email = email;
	}
	
	public String getEmail() {
		return this.email;
	}

}
