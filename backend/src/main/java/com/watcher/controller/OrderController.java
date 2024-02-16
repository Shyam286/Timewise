package com.watcher.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.watcher.dto.OrderDto;
import com.watcher.service.OrderService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")

public class OrderController {

	
	@Autowired
	public OrderService orderService;
	
	@PostMapping("/public/users/{emailId}/carts/{cartId}/payments/{paymentMethod}/order")
	public ResponseEntity<OrderDto> orderProducts(@PathVariable String emailId, @PathVariable int cartId, @PathVariable
			String paymentMethod) {
		System.out.println("start--------------------------");

		OrderDto order = orderService.placeOrder(emailId, cartId, paymentMethod);
		
		return new ResponseEntity<OrderDto>(order, HttpStatus.CREATED);
	}
	
	@GetMapping("/admin/orders")
	public ResponseEntity<?> getAllOrders() {
		
		return ResponseEntity.status(HttpStatus.FOUND).body(orderService.getAllOrders());
	}
	
	@GetMapping("/public/users/{emailId}/orders")
	public ResponseEntity<List<OrderDto>> getOrdersByUser(@PathVariable String emailId) {
		List<OrderDto> orders = orderService.getOrdersByUser(emailId);
		
		return new ResponseEntity<List<OrderDto>>(orders, HttpStatus.FOUND);
	}
	
	@GetMapping("/public/users/{emailId}/orders/{orderId}")
	public ResponseEntity<OrderDto> getOrderByUser(@PathVariable String emailId, @PathVariable int orderId) {
		OrderDto order = orderService.getOrder(emailId, orderId);
		
		return new ResponseEntity<OrderDto>(order, HttpStatus.FOUND);
	}
	
	@PutMapping("/admin/users/{emailId}/orders/{orderId}/orderStatus/{orderStatus}")
	public ResponseEntity<OrderDto> updateOrderByUser(@PathVariable String emailId, @PathVariable int orderId, @PathVariable String orderStatus) {
		OrderDto order = orderService.updateOrder(emailId, orderId, orderStatus);
		
		return new ResponseEntity<OrderDto>(order, HttpStatus.OK);
	}
}
