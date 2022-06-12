package com.lamichhane.ecommerce.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_id_seq")
	@SequenceGenerator(name = "product_id_seq", 
	                   sequenceName = "product_seq",
	                   allocationSize = 1) 
	@Column(name="id")
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	@Column(name="price")
	private long price;
	
	@Column(name="pictureurl")
	private String pictureurl;
	
	@Column(name="type")
	private String type;
	
	@Column(name="brand")
	private String brand;
	
	@Column(name="quantityinstock")
	private int quantityinstock;
	
	
	public Product() {
	}


	public Product(String name, String description, long price, String pictureurl, String type, String brand,
			int quantityinstock) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.pictureurl = pictureurl;
		this.type = type;
		this.brand = brand;
		this.quantityinstock = quantityinstock;
	}


	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", description=" + description + ", price=" + price
				+ ", pictureurl=" + pictureurl + ", type=" + type + ", brand=" + brand + ", quantityinstock="
				+ quantityinstock + "]";
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public long getPrice() {
		return price;
	}


	public void setPrice(long price) {
		this.price = price;
	}


	public String getPictureurl() {
		return pictureurl;
	}


	public void setPictureurl(String pictureurl) {
		this.pictureurl = pictureurl;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getBrand() {
		return brand;
	}


	public void setBrand(String brand) {
		this.brand = brand;
	}


	public int getQuantityinstock() {
		return quantityinstock;
	}


	public void setQuantityinstock(int quantityinstock) {
		this.quantityinstock = quantityinstock;
	}


	public int getId() {
		return id;
	}

	

	
	
	
	
	
	
}
