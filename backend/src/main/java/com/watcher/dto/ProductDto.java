package com.watcher.dto;


import com.watcher.entity.Category;

import jakarta.validation.constraints.NotBlank;
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
	
	private String image1; 
	
	private String image2; 

	private String image3;

	private String brand;
	
	private String color;
	
	private Category category;

	public ProductDto(String description, int price, int quantity, String brand, String color) {
		super();
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.brand = brand;
		this.color = color;
	}

	public ProductDto(String title, String description, int price, int discountedPrice, int quantity, String image1,
			String image2, String image3, String brand, String color, Category category) {
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
		this.category = category;
	}

	

	
	
}
