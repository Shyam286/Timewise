package com.watcher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.watcher.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer>{

	@Query("SELECT c FROM Cart c WHERE c.user.email = :emailId AND c.id = :cartId")
	public Cart findCartByEmailAndId(String emailId, int cartId);

	@Query("SELECT c From Cart c where c.user.id=:userId")
	public Cart findByUserId(int userId);
}
