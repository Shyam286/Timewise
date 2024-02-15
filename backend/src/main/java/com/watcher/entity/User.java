package com.watcher.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.databind.deser.Deserializers.Base;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="user")
@ToString(exclude = "password")
public class User extends BaseEntity implements  UserDetails{
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private int userId;
	
	private String firstname;
	
	private String lastname;

	private String email;
	
	private String password;
	
	private long mobileNo;
	
	private LocalDate registerDate;
	
	@Enumerated(EnumType.STRING)
	private Role role;
	
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
	private List<Address> addresses = new ArrayList<>();
	
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	private Cart cart;
	 
		public User(String firstname, String lastname, String email, String password, Long mobileNo, LocalDate registerDate,
				Role role) {
			super();
			this.firstname = firstname;
			this.lastname = lastname;
			this.email = email;
			this.password = password;
			this.mobileNo = mobileNo;
			this.registerDate = registerDate;
			this.role = role;
		}
		
//		//helper method
		public void addAddress(Address address) {
			System.out.println("-----------------five");
			addresses.add(address);
			address.setUser(this);
			System.out.println("-----------------final");

		}
		
		public void removeAddress(Address address) {
			addresses.remove(address);
			address.setUser(this);
		} 
		
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of(new SimpleGrantedAuthority(role.name()));
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
