package com.sjy.blog.dto.usersdto;

import com.sjy.blog.model.entity.Users;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserLoginDto {

	private String email;
	
	private String password;
	
	public Users toEntity() {
		return Users.builder().email(email).password(password).build();
	}
}
