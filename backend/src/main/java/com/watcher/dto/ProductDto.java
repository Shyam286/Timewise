package com.watcher.dto;

import java.time.LocalDate;

import com.watcher.entity.Role;

import jakarta.persistence.Lob;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProductDto {
	
	private int id;
	private String description;
	private int price;
	private int quantity;
	
	private byte[] image1; 
	
	private byte[] image2; 
	
	private byte[] image3;
	
	private byte[] image4;
	
	private byte[] image5;

	private String brand;
	
	private String color;

	public ProductDto(String description, int price, int quantity, String brand, String color) {
		super();
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.brand = brand;
		this.color = color;
	}
	
}
