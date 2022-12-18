package com.packt.cardatabase.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Owner {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long ownerid;
	private String firstName, lastName;
	
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "owner")
	private List<Car> cars;
	
	public Owner() {}
	
	public Owner(String  firstName, String lastName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
	}
	


	public List<Car> getCars() {
		return cars;
	}

	public void setCars(List<Car> cars) {
		this.cars = cars;
	}

	public long getOwnerid() {
		return ownerid;
	}

	public void setOwnerid(long ownerid) {
		this.ownerid = ownerid;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
}
