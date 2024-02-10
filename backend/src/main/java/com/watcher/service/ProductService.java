package com.watcher.service;

import java.util.List;

import com.watcher.dto.ApiResponse;
import com.watcher.dto.ProductDto;

public interface ProductService {
	
	ApiResponse addProduct(ProductDto product);
	
	List<ProductDto> getAllProduct();
	
	ProductDto getProductById(int productId);
	
	ProductDto updateProduct(int productId, ProductDto productDto);
	
	ApiResponse deleteProductById(int productId);
	
	 
	
}
