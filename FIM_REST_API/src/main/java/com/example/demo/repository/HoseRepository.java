package com.example.demo.repository;

import com.example.demo.hose.Hose;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HoseRepository extends JpaRepository<Hose, Integer> {
}
