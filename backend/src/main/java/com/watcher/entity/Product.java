package com.watcher.entity;



import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="product")
public class Product extends BaseEntity{

	@NotBlank
	private String title;
	@NotBlank
	private String description;
	@NotNull
	private int price;
	@NotNull
	private int discountedPrice=0;
	@NotNull
	private int quantity;
	
	@NotBlank
	private String image1; 
	@NotBlank
	private String image2; 
	@NotBlank
	private String image3;
	@NotBlank
	private String brand;
	@NotBlank
	private String color;
	

	@Enumerated(EnumType.STRING)
	private Category category;

	@OneToMany(mappedBy = "product", cascade = { CascadeType.PERSIST, CascadeType.MERGE }, fetch = FetchType.EAGER)
	private List<CartItem> products = new ArrayList<>();
	
	@OneToMany(mappedBy = "product", cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	private List<OrderItem> orderItems = new ArrayList<>();
}
