package com.watcher.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.watcher.dto.ProductDto;
import com.watcher.service.ProductService;

@RestController
@RequestMapping("/api")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping("/admin/add")
	public ResponseEntity<?> addProduct(@RequestBody ProductDto productDto){
		
		return ResponseEntity.status(HttpStatus.OK).body(productService.addProduct(productDto));
	}
	
	@GetMapping("/public/products")
	public ResponseEntity<?> getAllProduct(){
		
		return ResponseEntity.ok(productService.getAllProduct());
	}
	
	@GetMapping("/public/{productId}")
	public ResponseEntity<?> getProductByProductId(@PathVariable int productId){
		
		return ResponseEntity.ok(productService.getProductById(productId));
	}
	
	@PutMapping("/admin/product/{productId}")
	public ResponseEntity<?> updateProductById(@PathVariable int productId, @RequestBody ProductDto productDto){
		
		return ResponseEntity.status(HttpStatus.OK).body(productService.updateProduct(productId, productDto));
		
	}
	@DeleteMapping("/admin/product/{id}")
	public ResponseEntity<?> deleteProductByProductId(@PathVariable int productId){
		
		return ResponseEntity.ok(productService.deleteProductById(productId));
	}
}
