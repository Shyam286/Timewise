package com.watcher.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.watcher.custom_exception.ApiException;
import com.watcher.custom_exception.ResourceNotFoundException;
import com.watcher.dto.OrderDto;
import com.watcher.entity.Order;
import com.watcher.repository.CartRepository;
import com.watcher.repository.OrderRepository;
import com.watcher.repository.UserRepository;

public class OrderServiceImpl implements OrderService{

	@Autowired
	public UserRepository userRepository;

	@Autowired
	public CartRepository cartRepository;

	@Autowired
	public OrderRepository orderRepository;

	@Autowired
	public ModelMapper mapper;
	
	@Override
	public OrderDto placeOrder(String emailId, int cartId, String paymentMethod) {
		
		return null;
	}

	@Override
	public OrderDto getOrder(String emailId, int orderId) {
		
		Order order = orderRepository.findOrderByEmailAndId(emailId, orderId);

		if (order == null) {
			throw new ResourceNotFoundException("OrderId"+orderId);
		}

		return mapper.map(order, OrderDto.class);
	}

	@Override
	public List<OrderDto> getOrdersByUser(String emailId) {
		List<Order> orders = orderRepository.findAllByEmail(emailId);

		List<OrderDto> orderDto = orders.stream().map(order -> mapper.map(order, OrderDto.class))
				.collect(Collectors.toList());

		if (orderDto.size() == 0) {
			throw new ApiException("No orders placed yet by the user with email: " + emailId);
		}

		return orderDto;
	}

	@Override
	public List<OrderDto> getAllOrders() {
		
		List<Order> orders = orderRepository.findAll();

		
		List<OrderDto> orderDto = orders.stream().map(order -> mapper.map(order, OrderDto.class))
				.collect(Collectors.toList());
		
		return orderDto;
	}

	@Override
	public OrderDto updateOrder(String emailId, int orderId, String orderStatus) {
		
		Order order = orderRepository.findOrderByEmailAndId(emailId, orderId);

		if (order == null) {
			throw new ResourceNotFoundException("OrderId"+orderId);
		}

		order.setOrderStatus(orderStatus);

		return mapper.map(order, OrderDto.class);
	}

}
