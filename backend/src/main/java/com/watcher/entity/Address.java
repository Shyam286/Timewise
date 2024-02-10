package com.watcher.entity;




import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="address")
public class Address extends BaseEntity{
	
	@Column(length=20)
	private String address;
	
	@Column(length=20)
	private String city;
	@Column(length=20)
	private String state;
	@Column(length=20)
	private String country;
	@Column(length=20)
	private String zipCode;

    @ManyToOne  
    @JoinColumn(name = "userId")
    private User user;

	public Address(String address, String city, String state, String country, String zipCode) {
		super();
		this.address = address;
		this.city = city;
		this.state = state;
		this.country = country;
		this.zipCode = zipCode;
	}

	
}


/*
 * @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long addressId; 

	private String address;
	
	private String state;
	
	private String country;
 */
 
