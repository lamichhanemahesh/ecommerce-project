package com.lamichhane.ecommerce.service;



import java.util.List;

import com.lamichhane.ecommerce.entity.Product;

public interface ProductService {

	public List<Product> getAllProduct();
	   
	public void saveProduct(Product theProduct);

	public Product getProduct(int id);

	public void deleteProduct(int id);
}
