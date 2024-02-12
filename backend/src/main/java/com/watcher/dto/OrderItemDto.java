package com.watcher.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDto {

	private int Id;
	
	private ProductDto product;
	
	private int quantity;
	
	private double discount;
	
	private double orderedProductPrice;
}
