package com.example.demo.controller;

import com.example.demo.hose.Type;
import com.example.demo.repository.TypeRepository;
import javassist.tools.web.BadHttpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/types")
@CrossOrigin()
public class TypeController {

    @Autowired
    private TypeRepository repository;

    @GetMapping
    public Iterable<Type> findAll() {
        return repository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<Type> find(@PathVariable int id) {
        return repository.findById(id);
    }

    @PostMapping(consumes = "application/json")
    public Type create(@RequestBody Type type) {
        return repository.save(type);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable int id) {
        repository.deleteById(id);
    }

    @PutMapping(path = "/{id}")
    public Type update(@PathVariable int id, @RequestBody Type type) throws BadHttpRequest {
        if(repository.existsById(id)) {
            type.setId(id);
            return repository.save(type);
        } else {
            throw new BadHttpRequest();
        }
    }
}
