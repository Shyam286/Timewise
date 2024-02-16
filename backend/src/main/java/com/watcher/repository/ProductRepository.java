package com.watcher.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.watcher.entity.Category;
import com.watcher.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	
    List<Product> findByCategory(Category category);

    List<Product> findByColor(String color);

}
