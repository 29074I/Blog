package com.sjy.blog.dto.usersdto;

import com.sjy.blog.model.entity.UserRole;
import com.sjy.blog.model.entity.Users;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UsersRegisterDto {
	
	private String email;
	
	private String nickname;
	
	private String password;
	
	private String activeStatus;
	
	private UserRole role;
	
	public Users toEntity() {
		return Users.builder()
				.email(email)
				.nickname(nickname)
				.password(password)
				.activeStatus("Y")
				.role(UserRole.USER)
				.build();
	}
}
