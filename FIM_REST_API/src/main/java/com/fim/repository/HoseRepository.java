package com.fim.repository;

import com.fim.hose.Hose;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * <code> TypeRepository </code> is the Jpa Repository for Hoses
 * @author Cory Steudeman
 * @version 0.1
 */
public interface HoseRepository extends JpaRepository<Hose, Integer> {
}
