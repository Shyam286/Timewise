package com.watcher.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.watcher.custom_exception.ResourceNotFoundException;
import com.watcher.dto.ApiResponse;
import com.watcher.dto.ProductDto;
import com.watcher.entity.Product;
import com.watcher.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ModelMapper mapper;
	@Override
	public ApiResponse addProduct(ProductDto productDto) {
		  
		Product product = mapper.map(productDto, Product.class);
		productRepository.save(product);
		return new ApiResponse("Product :"+ product.getTitle() +" Added Successfully....");
	}

	@Override
	public List<ProductDto> getAllProduct() {
		
		return productRepository.findAll()
				.stream()
				.map(prod -> mapper.map(prod,ProductDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ProductDto getProductById(int productId) {
		Product product = productRepository.findById(productId)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid product ID !!"));
		
		return mapper.map(product, ProductDto.class);
	}

	@Override
	public ProductDto updateProduct(int productId, ProductDto productDto) {
		
		Product product = productRepository.findById(productId).orElseThrow(()-> new ResourceNotFoundException("Invalid  product id !!!"));
		mapper.map(productDto, product);
		
		productRepository.save(product);
		return mapper.map(product, ProductDto.class);
	}

	@Override
	public ApiResponse deleteProductById(int productId) {
		Product product = productRepository.findById(productId).orElseThrow(()-> new ResourceNotFoundException("Invalid  product id !!!"));
		productRepository.delete(product);
		
		return new ApiResponse("Product "+product.getTitle()+" Deleted Successfully.....");
	}

}
