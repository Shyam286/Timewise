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
	private String street;
	
	@Column(length=30)
	private String buildingName;
	
	@Column(length=20)
	private String city;
	@Column(length=20)
	private String state;
	@Column(length=20)
	private String country;
	@Column(length=20)
	private String pincode;

    @ManyToOne  
    @JoinColumn(name = "userId")
    private User user;

	public Address(String street, String buildingName, String city, String state, String country, String pincode) {
		super();
		this.street = street;
		this.buildingName = buildingName;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pincode = pincode;
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
 
