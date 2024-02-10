package com.watcher.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.watcher.dto.ApiResponse;
import com.watcher.dto.UserDto;
import com.watcher.entity.User;
import com.watcher.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Override
	public List<UserDto> getAllUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ApiResponse deleteUserDetails(int userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserDto updateUser(int userId, UserDto dto) {
		// TODO Auto-generated method stub
		return null;
	}


//	@Override
//	public AuthenticationResponse register(RegisterRequest request);{
//		User user=mapper.map(reqDTO, UserEntity.class);
//		user.setPassword(encoder.encode(user.getPassword()));//pwd : encrypted using SHA
//		return mapper.map(userDao.save(user), Signup.class);
//		return ;
//	}


}
