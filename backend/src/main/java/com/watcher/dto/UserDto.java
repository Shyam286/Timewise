package com.watcher.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.watcher.entity.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private Long mobileNo;
	private Role role;
	private LocalDate registerDate;
	private CartDto cart;
	
//	public UserDto(String firstname, String lastname,
//			String email, String password, Long mobileNo, Role role) {
//		super();
//		this.firstname = firstname;
//		this.lastname = lastname;
//		this.email = email;
//		this.password = password;
//		this.mobileNo = mobileNo;
//		this.role = role;
//	}
}
