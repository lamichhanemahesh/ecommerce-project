package com.lamichhane.ecommerce.security.dao;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lamichhane.ecommerce.security.entity.UserEntity;
import com.lamichhane.ecommerce.security.entity.UserRoleEntity;

@Repository
public interface UserRoleRepository extends CrudRepository<UserRoleEntity, Integer> {

    UserEntity findByUserEntity(UserEntity userEntity);
}
