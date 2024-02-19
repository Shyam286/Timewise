package com.watcher.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.watcher.entity.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDto {
	private int id;
	private String firstname;
	private String lastname;
	
	@JsonProperty(access = Access.READ_ONLY)
	private String email;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	private Long mobile;
	private int age;
	private Role role;
	private LocalDate registerDate;
//	private CartDto cart;
//	
//	private AddressDTO address;
	
	
	
	
	
	
	
	
	
	
	
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
