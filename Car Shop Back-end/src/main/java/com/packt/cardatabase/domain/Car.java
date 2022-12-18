package com.packt.cardatabase.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Car {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String brand, model, color, registerNumber;
	private int productionYear;
	private int price;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="owner")
	private Owner owner;
	
	public Car() {}
	
	public Car(String brand, String model, String color, 
			String registerNumber, int productionYear, int price, Owner owner) {
		this.brand = brand;
		this.model = model;
		this.color = color;
		this.registerNumber = registerNumber;
		this.productionYear = productionYear;
		this.price = price;
		this.owner = owner;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getRegisterNumber() {
		return registerNumber;
	}

	public void setRegisterNumber(String registerNumber) {
		this.registerNumber = registerNumber;
	}

	public int getProductionYear() {
		return productionYear;
	}

	public void setProductionYear(int productionYear) {
		this.productionYear = productionYear;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public Owner getOwner() {
		return owner;
	}

	public void setOwner(Owner owner) {
		this.owner = owner;
	}
	
}