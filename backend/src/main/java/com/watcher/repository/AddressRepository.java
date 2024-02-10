package com.watcher.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.watcher.entity.Address;
import com.watcher.entity.User;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {

	
}
