package com.watcher.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
public class CartController {

	
	@Autowired
	private CartService cartService;
	
	@PostMapping("/public/carts/{cartId}/products/{productId}/quantity/{quantity}")
	public ResponseEntity<CartDto> addProductToCart(@PathVariable int cartId, @PathVariable int productId, @PathVariable int quantity) {
		CartDto cartDTO = cartService.addProductToCart(cartId, productId, quantity);
		
		return new ResponseEntity<CartDto>(cartDTO, HttpStatus.CREATED);
	}
	
	
	@GetMapping("/admin/carts")
	public ResponseEntity<List<CartDto>> getCarts() {
		
		List<CartDto> cartDTOs = cartService.getAllCarts();
		
		return new ResponseEntity<List<CartDto>>(cartDTOs, HttpStatus.FOUND);
	}
	
	
	@GetMapping("/public/user/{cartId}")
	public ResponseEntity<CartDto> getCartById( @PathVariable int cartId) {
		CartDto cartDTO = cartService.getCartById(cartId);
		
		return new ResponseEntity<CartDto>(cartDTO, HttpStatus.FOUND);
	}
	
	@PutMapping("/public/carts/{cartId}/products/{productId}/quantity/{quantity}")
	public ResponseEntity<CartDto> updateCartProduct(@PathVariable int cartId, @PathVariable int productId, @PathVariable int quantity) {
		CartDto cartDTO = cartService.updateProductQuantityInCart(cartId, productId, quantity);
		
		return new ResponseEntity<CartDto>(cartDTO, HttpStatus.OK);
	}
	
	@DeleteMapping("/public/carts/{cartId}/product/{productId}")
	public ResponseEntity<String> deleteProductFromCart(@PathVariable int cartId, @PathVariable int productId) {
		String status = cartService.deleteProductFromCart(cartId, productId);
		
		return new ResponseEntity<String>(status, HttpStatus.OK);
	}
}
