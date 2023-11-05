package com.sjy.blog.dto.usersdto;

import com.sjy.blog.model.entity.UserRole;
import com.sjy.blog.model.entity.Users;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserProfileDto {
	private Long id;
	private String email;
	private String nickname;
	private String activeStatus;
	private UserRole role;
	private String img_url;
	
	public Users toEntity() {
		return Users.builder()
				.id(id)
				.email(email)
				.nickname(nickname)
				.activeStatus(activeStatus)
				.role(role)
				.img_url(img_url)
				.build();
	}

}
