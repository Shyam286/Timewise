package com.watcher.security;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.watcher.dto.AuthenticationRequest;
import com.watcher.dto.AuthenticationResponse;
import com.watcher.dto.RegisterRequest;
import com.watcher.entity.Cart;
import com.watcher.entity.Role;
import com.watcher.entity.User;
import com.watcher.repository.UserRepository;
import com.watcher.service.UserService;

@Service
public class AuthenticationService {
	
	@Autowired
	  private  UserRepository userRepository;
	@Autowired
	  private  UserService userService;
	@Autowired
	  private  PasswordEncoder passwordEncoder;
	@Autowired
	  private  JwtService jwtService;
	@Autowired
	  private  AuthenticationManager authenticationManager;
	  
	  public AuthenticationResponse register(RegisterRequest request) {
	      var user = User.builder()
	                  .firstname(request.getFirstname())
	                  .lastname(request.getLastname())
	                  .email(request.getEmail())
	                  .password(passwordEncoder.encode(request.getPassword()))
	                  .mobileNo(request.getMobileNo())
	                  .registerDate(LocalDate.now())
	                  .role(Role.USER)
	                  .build();
            
	        Cart cart = new Cart();
			user.setCart(cart);
	      user = userRepository.save(user);
	      var jwtToken = jwtService.generateToken(user);
	      return AuthenticationResponse.builder().token(jwtToken).build();
	  }
	  
	  public AuthenticationResponse authenticate(AuthenticationRequest request) {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
						request.getEmail(), 
						request.getPassword())					
					);  
			var user = userRepository.findByEmail(request.getEmail())
					.orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));;
			var jwtToken = jwtService.generateToken(user);
	      return AuthenticationResponse.builder().token(jwtToken).build();

		  }
/*
	  public AuthenticationResponse signin(SignInRequest request) {
	      authenticationManager.authenticate(
	              new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
	      var emp = userRepository.findByUsername(request.getUsername())
	              .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
	      var jwt = jwtService.generateToken(emp);
	      return JwtAuthenticationResponse.builder().token(jwt).build();
	  }
	*/  
}
