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

/*
Hibernate: select c1_0.id,c1_0.cart_id,c1_0.discount,c1_0.price,c1_0.product_id,c1_0.quantity from cart_item c1_0 
              where c1_0.cart_id=? 
             and c1_0.product_id=?

*/