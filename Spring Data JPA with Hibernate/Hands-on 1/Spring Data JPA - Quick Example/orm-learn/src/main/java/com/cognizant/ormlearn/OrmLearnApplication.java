package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);

        LOGGER.info("Inside main");

        countryService = context.getBean(CountryService.class);

        // Hands-on 1 Test
        testGetAllCountries();

        // Hands-on 6 Test
        testFindCountryByCode();
        
        //Hands-on 7 Test
        testAddCountry();
        
        //Hands-on 8 Test
        testUpdateCountry();
        
        //Hands-on 9 Test
        testDeleteCountry();
        
        testSearchCountries();
    }

    private static void testGetAllCountries() {

        LOGGER.info("Start - Get All Countries");

        List<Country> countries = countryService.getAllCountries();

        LOGGER.debug("Countries={}", countries);

        LOGGER.info("End - Get All Countries");
    }

    private static void testFindCountryByCode() {

        LOGGER.info("Start - Find Country");

        try {
            Country country = countryService.findCountryByCode("AB");
            LOGGER.debug("Country={}", country);
        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }

        LOGGER.info("End - Find Country");
    }
    
    private static void testAddCountry() {

        LOGGER.info("Start - Add Country");

        Country country = new Country();
        country.setCode("ZZ");
        country.setName("Test Country");

        countryService.addCountry(country);

        try {
            Country addedCountry = countryService.findCountryByCode("ZZ");
            LOGGER.debug("Added Country={}", addedCountry);
        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }

        LOGGER.info("End - Add Country");
    }
    
    private static void testUpdateCountry() {

        LOGGER.info("Start - Update Country");

        try {

            Country country = countryService.findCountryByCode("ZZ");

            country.setName("Updated Test Country");

            countryService.updateCountry(country);

            Country updatedCountry = countryService.findCountryByCode("ZZ");

            LOGGER.debug("Updated Country={}", updatedCountry);

        } catch (CountryNotFoundException e) {

            LOGGER.error(e.getMessage());

        }

        LOGGER.info("End - Update Country");
    }
    
    private static void testDeleteCountry() {

        LOGGER.info("Start - Delete Country");

        try {

            countryService.deleteCountry("ZZ");

            LOGGER.debug("Country with code ZZ deleted successfully.");

        } catch (CountryNotFoundException e) {

            LOGGER.error(e.getMessage());

        }

        LOGGER.info("End - Delete Country");
    }
    
    private static void testSearchCountries() {

        LOGGER.info("Start - Search Countries");

        List<Country> countries = countryService.searchCountries("ou");

        LOGGER.debug("Matching Countries={}", countries);

        LOGGER.info("End - Search Countries");
    }
}