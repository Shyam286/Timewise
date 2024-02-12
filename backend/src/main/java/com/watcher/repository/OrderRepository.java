package com.watcher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.watcher.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer>{

}
