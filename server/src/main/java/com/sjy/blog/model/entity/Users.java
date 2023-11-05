package com.sjy.blog.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Users extends BaseEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long id;
	
	@Column(length = 100, unique = true, nullable = false)
	private String email;
	
	@Column(length = 16, nullable = false)
	private String password;
	
	@Column(nullable = false, unique = true)
	private String nickname;
	
	@Enumerated(EnumType.STRING)
	private UserRole role;
	
	private String img_url;

	@Builder
	public Users(Long id, String email, String password, String nickname, UserRole role, String img_url) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.nickname = nickname;
		this.role = role;
		this.img_url = img_url;
	}
	
	

}
