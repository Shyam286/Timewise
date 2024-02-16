package com.watcher.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;
	
	@OneToMany(mappedBy = "cart", cascade = CascadeType.ALL,orphanRemoval = true)
	private List<CartItem> cartItem = new ArrayList<>();
	
	private double totalPrice = 0.0;
	
	
	public void addCart(CartItem cartIt) {
		cartItem.add(cartIt);
		cartIt.setCart(this);
	}
	
	public void removeCart(CartItem cartIt) {
		cartItem.remove(cartIt);
		cartIt.setCart(this);
	} 
}
