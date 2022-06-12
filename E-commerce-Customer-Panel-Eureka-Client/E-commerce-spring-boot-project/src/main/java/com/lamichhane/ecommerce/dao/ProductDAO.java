package com.lamichhane.ecommerce.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lamichhane.ecommerce.entity.Product;
	
@Repository
public interface ProductDAO extends JpaRepository<Product,Integer>{

}
