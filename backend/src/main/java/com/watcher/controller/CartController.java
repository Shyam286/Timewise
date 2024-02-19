package com.watcher.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.watcher.dto.CartDto;
import com.watcher.service.CartService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")

public class CartController {

	
	@Autowired
	private CartService cartService;
	
	@PostMapping("/public/carts/{cartId}/products/{productId}/quantity/{quantity}")
	public ResponseEntity<?> addProductToCart(@PathVariable int cartId, @PathVariable int productId,@PathVariable int quantity) {
		return ResponseEntity.ok(cartService.addProductToCart(cartId, productId,quantity));		
	}
	
	
	@GetMapping("/admin/carts")
	public ResponseEntity<?> getCarts() {
		
		return ResponseEntity.ok(cartService.getAllCarts());
	}
	
	
	@GetMapping("/public/user/cart/{cartId}")
	public ResponseEntity<?> getCartById( @PathVariable int cartId) {
		return ResponseEntity.ok(cartService.getCartById(cartId));
		
	}
	
//	@GetMapping("/public/user/{userId}")
//	public ResponseEntity<?> getCartByUserId( @PathVariable int cartId) {
//		return ResponseEntity.ok(cartService.getCartById(cartId));
//		
//	}
	
	@PutMapping("/public/carts/{cartId}/products/{productId}/quantity/{quantity}")
	public ResponseEntity<?> updateCartProduct(@PathVariable int cartId, @PathVariable int productId,@PathVariable int quantity) {
		
		return ResponseEntity.ok(cartService.updateProductQuantityInCart(cartId, productId,quantity));
	}
	
	@DeleteMapping("/public/carts/{cartId}/product/{productId}")
	public ResponseEntity<?> deleteProductFromCart(@PathVariable int cartId, @PathVariable int productId) {
		return ResponseEntity.ok(cartService.deleteProductFromCart(cartId, productId));
		
	}
}
