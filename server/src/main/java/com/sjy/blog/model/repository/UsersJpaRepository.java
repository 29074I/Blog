package com.sjy.blog.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sjy.blog.model.entity.Users;

public interface UsersJpaRepository extends JpaRepository<Users, Long> {
	
	Optional<Users> findByEmail (String email);
	
	Optional<Users> findByNickname (String nickname);

	boolean existsByEmail(String email);
	
	boolean existsByNickname(String nickname);
}
