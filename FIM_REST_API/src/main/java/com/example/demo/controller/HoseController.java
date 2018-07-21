package com.example.demo.controller;

import com.example.demo.hose.Hose;
import com.example.demo.hose.Type;
import com.example.demo.repository.HoseRepository;
import com.example.demo.repository.TypeRepository;
import javassist.tools.web.BadHttpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/hoses")
@CrossOrigin()
public class HoseController {

    @Autowired
    private HoseRepository repository;

    @Autowired
    private TypeRepository typeRepository;

    @GetMapping
    public Iterable<Hose> findAll() {
        return repository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<Hose> find(@PathVariable int id) {
        return repository.findById(id);
    }

    @PostMapping(consumes = "application/json")
    public Hose create(@RequestBody Hose hose) {
        Optional<Type> type = typeRepository.findById(hose.getType().getId());
        if(type.isPresent()) {
            hose.setTypes(type.get());
        }

        return repository.save(hose);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable int id) {
        repository.deleteById(id);
    }

    @PutMapping(path = "/{id}")
    public Hose update(@PathVariable int id, @RequestBody Hose hose) throws BadHttpRequest {
        if(repository.existsById(id)) {
            hose.setId(id);
            return repository.save(hose);
        } else {
            throw new BadHttpRequest();
        }
    }
}
