package com.watcher.dto;

import java.time.LocalDate;

import com.watcher.entity.Role;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterRequest {
	
	private String firstname;
	
	private String lastname;

	private String email;
	
	private String password;
	
	private long mobile;
	
	private int age;

	private LocalDate registerDate;
	
	private Role role;

	
}
