// src/main/java/com/cognizant/ormlearn/service/CountryService.java
package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    /** Hands‑On 1: already done */
    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    /** Hands‑On 6: Find by code */
    @Transactional
    public Country findCountryByCode(String code) {
        Optional<Country> opt = countryRepository.findById(code);
        return opt.orElseThrow(() -> new CountryNotFoundException(code));
    }

    /** Hands‑On 7: Add new country */
    @Transactional
    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    /** Hands‑On 8: Update existing country’s name */
    @Transactional
    public Country updateCountry(String code, String newName) {
        Country country = findCountryByCode(code);
        country.setName(newName);
        return countryRepository.save(country);
    }
}
