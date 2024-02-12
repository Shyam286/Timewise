package com.watcher.service;

import java.util.List;

import com.watcher.dto.CartDto;

public interface CartService {
	
	CartDto addProductToCart(int cartId, int productId, int quantity);
	
	List<CartDto> getAllCarts();
	
	CartDto getCartById(int cartId);
	
	CartDto updateProductQuantityInCart(int cartId, int productId, int quantity);
	
	void updateProductInCarts(int cartId, int productId);
	
	String deleteProductFromCart(int cartId, int productId);
}
