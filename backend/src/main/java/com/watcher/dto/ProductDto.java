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
	
	private String title;
	
	private String description;
	
	private int price;
	
	private int discountedPrice;
	
	private int quantity;
	
	private byte[] image1; 
	
	private byte[] image2; 
	
	private byte[] image3;

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

	public ProductDto(String title, String description, int price, int discountedPrice, int quantity, byte[] image1,
			byte[] image2, byte[] image3, String brand, String color) {
		super();
		this.title = title;
		this.description = description;
		this.price = price;
		this.discountedPrice = discountedPrice;
		this.quantity = quantity;
		this.image1 = image1;
		this.image2 = image2;
		this.image3 = image3;
		this.brand = brand;
		this.color = color;
	}
	
	
	
}
