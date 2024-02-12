package com.watcher.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItemDto {

	private int cartItemId;
	
	private CartDto cart;
	
	private ProductDto product;
	
	private int quantity;
	
	private double discount;
	
	private double productPrice;
}
