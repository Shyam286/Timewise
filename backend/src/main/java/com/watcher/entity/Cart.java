package com.watcher.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="cart")
@ToString
public class Cart extends BaseEntity {

	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@OneToMany(mappedBy = "cart", orphanRemoval = true)
	private List<CartItem> cartItem = new ArrayList<>();
	
	private double totalPrice = 0.0;
	
	
	public void addCart(CartItem cartIt) {
		System.out.println("-----------------five");
		cartItem.add(cartIt);
		cartIt.setCart(this);
		System.out.println("-----------------final");

	}
	
	public void removeCart(CartItem cartIt) {
		cartItem.remove(cartIt);
		cartIt.setCart(this);
	} 
}
