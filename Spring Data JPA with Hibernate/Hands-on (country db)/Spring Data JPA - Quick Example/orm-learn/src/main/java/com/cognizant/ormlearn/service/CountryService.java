package com.cognizant.ormlearn.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional
    public Country findCountryByCode(String countryCode)
            throws CountryNotFoundException {

        Optional<Country> result = countryRepository.findById(countryCode);

        if (!result.isPresent()) {
            throw new CountryNotFoundException(
                    "Country with code " + countryCode + " not found");
        }

        return result.get();
    }
    
    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
    }
    
    @Transactional
    public void updateCountry(Country country) {
        countryRepository.save(country);
    }
    
    @Transactional
    public void deleteCountry(String countryCode)
            throws CountryNotFoundException {

        Country country = findCountryByCode(countryCode);

        countryRepository.delete(country);
    }
    
    @Transactional
    public List<Country> searchCountries(String text) {

        return countryRepository.findByNameContainingIgnoreCase(text);

    }
    
    @Transactional
    public List<Country> searchCountriesSorted(String text) {

        return countryRepository.findByNameContainingIgnoreCaseOrderByNameAsc(text);

    }

    @Transactional
    public List<Country> searchCountriesStartingWith(String alphabet) {

        return countryRepository.findByNameStartingWithIgnoreCase(alphabet);

    }
}