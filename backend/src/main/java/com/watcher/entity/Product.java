package com.watcher.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="product")
public class Product extends BaseEntity{

	private String productName;
	private String description;
	private int price;
	private int quantity;
	@Lob // large object :col : longblob
	private byte[] image1; 
	@Lob
	private byte[] image2; 
	@Lob
	private byte[] image3;
	@Lob
	private byte[] image4;
	@Lob
	private byte[] image5;

	private String brand;
	
	private String color;

}
