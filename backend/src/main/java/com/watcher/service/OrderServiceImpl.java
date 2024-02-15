package com.watcher.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.watcher.custom_exception.ApiException;
import com.watcher.custom_exception.ResourceNotFoundException;
import com.watcher.dto.OrderDto;
import com.watcher.dto.OrderItemDto;
import com.watcher.entity.Cart;
import com.watcher.entity.CartItem;
import com.watcher.entity.Order;
import com.watcher.entity.OrderItem;
import com.watcher.entity.Payment;
import com.watcher.entity.Product;
import com.watcher.repository.CartRepository;
import com.watcher.repository.OrderItemRepository;
import com.watcher.repository.OrderRepository;
import com.watcher.repository.PaymentRepository;
import com.watcher.repository.UserRepository;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class OrderServiceImpl implements OrderService{

	@Autowired
	public UserRepository userRepository;

	@Autowired
	public CartRepository cartRepository;

	@Autowired
	public OrderRepository orderRepository;

	@Autowired
	private PaymentRepository paymentRepository;
	
	@Autowired
	private OrderItemRepository orderItemRepository;
	
	@Autowired
	private CartService cartService;
	
	@Autowired
	public ModelMapper mapper;
	
	@Override
	public OrderDto placeOrder(String emailId, int cartId, String paymentMethod) {
		System.out.println("1--------------------------"+cartId);
		Cart cart = cartRepository.findById(cartId)
				.orElseThrow(()-> new ResourceNotFoundException("Cart Not Found"));

//		System.out.println("2--------------------------"+cart);

		Order order = new Order();
		
		order.setEmail(emailId);
		order.setOrderDate(LocalDate.now());

		order.setTotalAmount(cart.getTotalPrice());
		order.setOrderStatus("Order Accepted !");

		Payment payment = new Payment();
		
		payment.setOrder(order);
		payment.setPaymentMethod(paymentMethod);

		payment = paymentRepository.save(payment);

		order.setPayment(payment);

		Order savedOrder = orderRepository.save(order);
		
		List<CartItem> cartItems = cart.getCartItem();
		
		if (cartItems.size() == 0) {
			throw new ApiException("Cart is empty");
		}
//		System.out.println("3--------------------------"+cartItems);

		List<OrderItem> orderItems = new ArrayList<>();

		for (CartItem cartItem : cartItems) {
			OrderItem orderItem = new OrderItem();

			orderItem.setProduct(cartItem.getProduct());
			orderItem.setQuantity(cartItem.getQuantity());
			orderItem.setDiscount(cartItem.getDiscount());
			orderItem.setOrderedProductPrice(cartItem.getProductPrice());
			orderItem.setOrder(savedOrder);

			orderItems.add(orderItem);
		}
//		System.out.println("4--------------------------"+orderItems);

		orderItems = orderItemRepository.saveAll(orderItems);

		cart.getCartItem().forEach(item -> {
			int quantity = item.getQuantity();

			Product product = item.getProduct();

			cartService.deleteProductFromCart(cartId, item.getProduct().getId());

			product.setQuantity(product.getQuantity() - quantity);
		});
//		System.out.println("5--------------------------");

		OrderDto orderDTO = mapper.map(savedOrder, OrderDto.class);
		
		orderItems.forEach(item -> orderDTO.getOrderItems().add(mapper.map(item, OrderItemDto.class)));
//		System.out.println("5--------------------------"+orderItems);

		return orderDTO;
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