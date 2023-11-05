package com.sjy.blog.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sjy.blog.dto.usersdto.UserLoginDto;
import com.sjy.blog.dto.usersdto.UserProfileDto;
import com.sjy.blog.dto.usersdto.UsersRegisterDto;
import com.sjy.blog.model.entity.Users;
import com.sjy.blog.model.repository.UsersJpaRepository;
import com.sjy.blog.service.exception.UserNotFoundException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Service
public class UsersService {
	
	private final UsersJpaRepository usersRepository;
	
	@Transactional
	public Long singUp(UsersRegisterDto usersRegisterDto) {
		log.info("usersService method save start...");
		usersRepository.save(usersRegisterDto.toEntity());
		Optional<Users> users = usersRepository.findByEmail(usersRegisterDto.getEmail());
		return users.get().getId();
	}
	
	@Transactional
	public boolean checkEmail(String email) {
		return usersRepository.existsByEmail(email);
	}
	
	@Transactional
	public boolean checkNickname(String nickname) {
		return usersRepository.existsByNickname(nickname);
	}
	
	@Transactional
	public UserProfileDto login(UserLoginDto userLoginDto) {
		log.info("usersService method login start...");
		
		Optional<Users> loginUser = usersRepository.findByEmailAndPasswordAndActiveStatus(
				userLoginDto.getEmail(), userLoginDto.getPassword(), "Y");
		
		Users users = loginUser.orElseThrow(() -> new UserNotFoundException(userLoginDto.getEmail()));
	
		UserProfileDto user = new UserProfileDto(
				users.getId(), users.getEmail(), users.getNickname(), users.getActiveStatus(), users.getRole(), users.getImg_url()
				);
		
		return user;
	}

}
