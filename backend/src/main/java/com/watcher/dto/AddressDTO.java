package com.watcher.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.watcher.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class AddressDTO {
	
	private String address;
	
	private String city;

	private String state;

	private String country;

	private String zipCode;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	private int userId;
}
