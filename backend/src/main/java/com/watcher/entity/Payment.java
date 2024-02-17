package com.watcher.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.Size;
@Entity
@Getter
@Setter
@ToString
@Table(name = "payments")
@AllArgsConstructor
@NoArgsConstructor
public class Payment extends BaseEntity{

	@OneToOne(mappedBy = "payment", cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	private Order order;

	@NotBlank
//	@Size(min = 4, message = "Payment method must contain atleast 4 characters")
	private String paymentMethod;
}
