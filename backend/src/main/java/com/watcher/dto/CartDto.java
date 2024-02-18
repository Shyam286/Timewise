package com.watcher.dto;

import java.util.ArrayList;
import java.util.List;

import com.watcher.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CartDto {
	
	private int id;
	private int userId;
	private String name;
	private double totalPrice;
	private List<ProductDto> product = new ArrayList<>();
}
