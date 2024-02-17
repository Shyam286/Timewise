package com.watcher.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.watcher.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer>{

	List<Order> findAllByEmail(String emailId);
	
	Order findOrderByEmailAndId(String emailId, int orderId);
}
