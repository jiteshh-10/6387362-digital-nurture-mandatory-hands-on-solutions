// src/main/java/com/cognizant/ormlearn/controller/CountryController.java
package com.cognizant.orm_learn.Controller;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;
import com.cognizant.orm_learn.service.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService service;

    // Retrieve all countries (existing)
    @GetMapping
    public List<Country> getAll() {
        return service.getAllCountries();
    }

    // Hands‑On 6: GET /countries/{code}
    @GetMapping("/{code}")
    public ResponseEntity<Country> getByCode(@PathVariable String code) {
        Country country = service.findCountryByCode(code);
        return ResponseEntity.ok(country);
    }

    // Hands‑On 7: POST /countries
    @PostMapping
    public ResponseEntity<Country> add(@RequestBody Country country) {
        Country saved = service.addCountry(country);
        return ResponseEntity.ok(saved);
    }

    // Hands‑On 8: PUT /countries/{code}?name=NewName
    @PutMapping("/{code}")
    public ResponseEntity<Country> updateName(
            @PathVariable String code,
            @RequestParam String name) {
        Country updated = service.updateCountry(code, name);
        return ResponseEntity.ok(updated);
    }

    // Global exception handler for CountryNotFoundException
    @ExceptionHandler(CountryNotFoundException.class)
    public ResponseEntity<String> handleNotFound(CountryNotFoundException ex) {
        return ResponseEntity
                .status(404)
                .body(ex.getMessage());
    }
}
