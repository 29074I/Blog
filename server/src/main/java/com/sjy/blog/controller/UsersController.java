package com.sjy.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sjy.blog.dto.usersdto.UsersRegisterDto;
import com.sjy.blog.service.UsersService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestController
public class UsersController {
	
	@Autowired
	private UsersService usersService;
	
	@PostMapping("/users")
	public ResponseEntity<?> signup(@RequestBody UsersRegisterDto usersRegisterDto) {
		log.info("Starting user registration for email {}", usersRegisterDto.getEmail());
		Long userId = usersService.singUp(usersRegisterDto);
		log.info("User registration completed with ID : {}", userId);
		if(userId == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("User registration failed due to server error.");
		} else {
			return ResponseEntity.ok().body(userId);
		}
	}
	
	@GetMapping("/users/email/{email}/exists")
	public ResponseEntity<Boolean> checkEmail(@PathVariable String email) {
		log.info("Starting check email : {}", email);
		return ResponseEntity.ok(usersService.checkEmail(email));
	}
	
	@GetMapping("/users/nick/{nickname}/exists")
	public ResponseEntity<Boolean> checkNickname(@PathVariable String nickname){
		log.info("Starting check nickname : {}", nickname);
		return ResponseEntity.ok(usersService.checkNickname(nickname));
	}

}
