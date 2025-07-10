package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }
    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

    @GetMapping("/country")
    public Country getCountryIndia() {
        Country country = (Country) context.getBean("country");
        return country;
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        List<Country> countries = (List<Country>) context.getBean("countryList");
        return countries;
    }
}
