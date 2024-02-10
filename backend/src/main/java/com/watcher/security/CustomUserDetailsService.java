package com.watcher.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.watcher.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {
	// dep : dao layer
	@Autowired
	private UserRepository userRepository; 

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		return userRepository.findByEmail(email).orElseThrow(() ->new UsernameNotFoundException("Username Not found"));

	}

}

/*
@Service
public class CustomUserDetailService implements UserDetailsService{

	@Autowired
	private EmployeeRepository empRepo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// load user from db by usernmae
		
		Employee emp=this.empRepo.findByUsername(username).orElseThrow(()-> new ResourceNotFoundException("Employee Not Found"));
		return emp;
	}

}
*/