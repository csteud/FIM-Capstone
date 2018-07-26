package com.fim.controller;

import com.fim.hose.Type;
import com.fim.repository.TypeRepository;
import javassist.tools.web.BadHttpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * <code> TypeController </code> is the rest controller class for hose types in our api
 * @author Cory Steudeman
 * @version 0.1
 */
@RestController
@RequestMapping(path = "/types")
@CrossOrigin()
public class TypeController {

    @Autowired
    private TypeRepository repository;

    /**
     * <code> findAll </code> returns a list of all the type objects int he repository
     * @return is of type Iterable<Type> and is a iterable of type objects
     */
    @GetMapping
    public Iterable<Type> findAll() {
        return repository.findAll();
    }

    /**
     * <code> Find </code>
     * @param id is of type int and is the id of the record being requested
     * @return is of type Optional<Type> and returns the found type
     */
    @GetMapping(path = "/{id}")
    public Optional<Type> find(@PathVariable int id) {
        return repository.findById(id);
    }

    /**
     * <code> create </code> creates a new type object with the passed in type
     * @param type is of type Type and is the Type object that is being created
     * @return is of type Type and it returns the created type record
     */
    @PostMapping(consumes = "application/json")
    public Type create(@RequestBody Type type) {
        return repository.save(type);
    }

    /**
     * <code>  delete </code> deletes record that matches the id of the passed in value.
     * @param id is the id of the record that is being requested to delete
     */
    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable int id) {
        repository.deleteById(id);
    }

    /**
     * <code>  put </code> updates requested record with requested information
     * @param id is the id of the record that is being updated
     * @param type is modified type object of the type being requested to update.
     * @return of type Type and returns the update entry
     */
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
