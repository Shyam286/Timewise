package com.watcher.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {
	
	private int id;
	
	private String email;
	
	private List<OrderItemDto> orderItems = new ArrayList<>();
		
	private LocalDate orderDate;
	
	private PaymentDto payment;
	
	private double totalAmount;
	
	private String orderStatus;
}
