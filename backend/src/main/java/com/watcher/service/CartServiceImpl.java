package com.watcher.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.watcher.custom_exception.ApiException;
import com.watcher.custom_exception.ResourceNotFoundException;
import com.watcher.dto.CartDto;
import com.watcher.dto.ProductDto;
import com.watcher.entity.Cart;
import com.watcher.entity.CartItem;
import com.watcher.entity.Product;
import com.watcher.repository.CartItemRepository;
import com.watcher.repository.CartRepository;
import com.watcher.repository.ProductRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional 
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private CartItemRepository cartItemRepository;

	@Autowired
	private ModelMapper mapper;
	
	@Override
	public CartDto addProductToCart(int cartId, int productId, int quantity) {
		
		Cart cart = cartRepository.findById(cartId)
					.orElseThrow(()-> new ResourceNotFoundException("cartId"+cartId));
		
		Product product = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("productId"+ productId));

		CartItem cartItem = cartItemRepository.findCartItemByProductIdAndCartId(cartId, productId);
		
		if (cartItem != null) {
			throw new ApiException("Product " + product.getTitle() + " already exists in the cart");
		}

		if (product.getQuantity() == 0) {
			throw new ApiException(product.getTitle() + " is not available");
		}

		if (product.getQuantity() < quantity) {
			throw new ApiException("Please, make an order of the " + product.getTitle()
					+ " less than or equal to the quantity " + product.getQuantity() + ".");
		}
		
		CartItem newCartItem = new CartItem();

		newCartItem.setProduct(product);
		newCartItem.setCart(cart);
		newCartItem.setQuantity(quantity);
		newCartItem.setDiscount(product.getDiscountedPrice());
		newCartItem.setPrice(product.getPrice());

		cartItemRepository.save(newCartItem);

		product.setQuantity(product.getQuantity() - quantity);
		
		cart.addCart(newCartItem);
		cart.setTotalPrice(cart.getTotalPrice() + (product.getDiscountedPrice() * quantity));

		CartDto cartDto = mapper.map(cart, CartDto.class);

		List<ProductDto> productDto = cart.getCartItem().stream()
				.map(p -> mapper.map(p.getProduct(), ProductDto.class)).collect(Collectors.toList());

		cartDto.setProduct(productDto);

		return cartDto;
	}

	@Override
	public List<CartDto> getAllCarts() {
	
		return cartRepository.findAll()
				.stream()
				.map(cart -> mapper.map(cart, CartDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public CartDto getCartById(int cartId) {
		Cart cart = cartRepository.findById(cartId)
				.orElseThrow(() -> new ResourceNotFoundException("Cart Not Found"));
		
		            
		CartDto cartDto = mapper.map(cartRepository.findById(cartId), CartDto.class);
		
		List<ProductDto> products = cart.getCartItem().stream()
				.map(p -> mapper.map(p.getProduct(), ProductDto.class)).collect(Collectors.toList());

		cartDto.setProduct(products);

		return cartDto;
	}

	@Override
	public CartDto updateProductQuantityInCart(int cartId, int productId, int quantity) {
		
		Cart cart = cartRepository.findById(cartId)
				.orElseThrow(() -> new ResourceNotFoundException("CartId"+ cartId));

		Product product = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("ProductId"+ productId));

		if (product.getQuantity() == 0) {
			throw new ApiException(product.getTitle() + " is not available");
		}

		if (product.getQuantity() < quantity) {
			throw new ApiException("Please, make an order of the " + product.getTitle()
					+ " less than or equal to the quantity " + product.getQuantity() + ".");
		}

		CartItem cartItem = cartItemRepository.findCartItemByProductIdAndCartId(cartId, productId);
		
		if (cartItem == null) {
			throw new ApiException("Product " + product.getTitle() + " not available in the cart!!!");
		}
		
		double cartPrice = cart.getTotalPrice() - (cartItem.getPrice() * cartItem.getQuantity());

		product.setQuantity(product.getQuantity() + cartItem.getQuantity() - quantity);

		cartItem.setPrice(product.getPrice());
		cartItem.setQuantity(quantity);
		cartItem.setDiscount(product.getDiscountedPrice());

		cart.setTotalPrice(cartPrice + (cartItem.getPrice() * quantity));
		cartItem = cartItemRepository.save(cartItem);

		CartDto cartDto = mapper.map(cart, CartDto.class);

		List<ProductDto> productDtos = cart.getCartItem().stream()
				.map(p -> mapper.map(p.getProduct(), ProductDto.class)).collect(Collectors.toList());

		cartDto.setProduct(productDtos);

		return cartDto;
	}

	@Override
	public void updateProductInCarts(int cartId, int productId) {
		Cart cart = cartRepository.findById(cartId)
				.orElseThrow(() -> new ResourceNotFoundException("CartId"+ cartId));

		Product product = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("ProductId"+ productId));

		CartItem cartItem = cartItemRepository.findCartItemByProductIdAndCartId(cartId, productId);

		if (cartItem == null) {
			throw new ApiException("Product " + product.getTitle() + " not available in the cart!!!");
		}

		double cartPrice = cart.getTotalPrice() - (cartItem.getPrice() * cartItem.getQuantity());

		cartItem.setPrice(product.getPrice());

		cart.setTotalPrice(cartPrice + (cartItem.getPrice() * cartItem.getQuantity()));

		cartItem = cartItemRepository.save(cartItem);
		
	}

	@Override
	public String deleteProductFromCart(int cartId, int productId) {
		Cart cart = cartRepository.findById(cartId)
				.orElseThrow(() -> new ResourceNotFoundException("CartId"+cartId));

		CartItem cartItem = cartItemRepository.findCartItemByProductIdAndCartId(cartId, productId);

		if (cartItem == null) {
			throw new ResourceNotFoundException("ProductId"+productId+"Not found in Cart");
		}

		cart.setTotalPrice(cart.getTotalPrice() - (cartItem.getPrice() * cartItem.getQuantity()));

		Product product = cartItem.getProduct();
		product.setQuantity(product.getQuantity() + cartItem.getQuantity());

		cartItemRepository.deleteCartItemByProductIdAndCartId(cartId, productId);

		return "Product " + cartItem.getProduct().getTitle() + " removed from the cart !!!";
	}

}
