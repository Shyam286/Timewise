package com.watcher.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo-controller")
public class DemoController {

//	 @PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/demo")
	public ResponseEntity<String> sayHello(){
		return ResponseEntity.ok("Hello everyOne");
	}
}
