package com.watcher.dto;

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
public class AddressUpdateDto {
	private Long addressId;

	
	private String address;
	
	private String city;

	private String state;

	private String country;

	private String zipCode;
	
	private int userId;
}
