package com.fim.controller;

import com.fim.hose.Hose;
import com.fim.hose.HoseNotFoundException;
import com.fim.hose.Type;
import com.fim.repository.HoseRepository;
import com.fim.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * <code> HoseController </code> is the rest controller class for hoses in our api
 * @author Cory Steudeman
 * @version 0.1
 */
@RestController
@RequestMapping(path = "/hoses")
@CrossOrigin()
public class HoseController {

    @Autowired
    private HoseRepository repository;

    @Autowired
    private TypeRepository typeRepository;

    /**
     * <code> findAll </code> returns a list of all the hose objects in the repository
     * @return is of type Iterable<Hose> and is a iterable of hose objects
     */
    @GetMapping
    public Iterable<Hose> findAll() {
        return repository.findAll();
    }

    /**
     * <code> Find </code>
     * @param id is of type int and is the id of the record being requested
     * @return is of type Optional<Hose> and returns the found hose
     */
    @GetMapping(path = "/{id}")
    public Optional<Hose> find(@PathVariable int id) {
        return repository.findById(id);
    }

    /**
     * <code> create </code> creates a new hose with the passed in hose
     * @param hose is of type Hose and is the Hose object that is being created
     * @return is of type Hose and it returns the created hose record
     */
    @PostMapping(consumes = "application/json")
    public Hose create(@RequestBody Hose hose) {
        if(hose.getType().getId() == null) {
            Type newType = typeRepository.save(hose.getType());
            hose.setTypes(newType);
        } else {
            Optional<Type> type = typeRepository.findById(hose.getType().getId());
            if(type.isPresent()) {
                hose.setTypes(type.get());
            } else {
                Type newType = new Type();
                newType.setDiameter(hose.getType().getDiameter());
                newType.setLength(hose.getType().getLength());
                hose.setTypes(typeRepository.save(newType));
            }
        }

        return repository.save(hose);
    }

    /**
     * <code>  delete </code> deletes record that matches the id of the passed in value.
     * @param id is the id of the record that is being requested to delete
     */
    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable int id) {
        if(repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new HoseNotFoundException("Unable to find hose with id: " + id);
        }
    }

    /**
     * <code>  put </code> updates requested record with requested information
     * @param id is the id of the record that is being updated
     * @param hose is modified hose object of the hose being requested to update.
     * @return of type Hose and returns the update entry
     */
    @PutMapping(path = "/{id}")
    public Hose update(@PathVariable int id, @RequestBody Hose hose) {

        if(repository.existsById(id)) {
            hose.setId(id);
            return repository.save(hose);
        } else {
            throw new HoseNotFoundException("Unable to find hose with id: " + id);
        }
    }
}
