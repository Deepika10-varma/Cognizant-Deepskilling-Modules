package com.cognizant.ormlearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

	//Hands-on 1 - contains
    List<Country> findByNameContainingIgnoreCase(String text);
    
    // Hands-on 1 - Sorted search
    List<Country> findByNameContainingIgnoreCaseOrderByNameAsc(String text);

    // Hands-on 1 - Starts with
    List<Country> findByNameStartingWithIgnoreCase(String alphabet);

}