package com.fim.repository;

import com.fim.hose.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * <code> TypeRepository </code> is the Jpa Repository for Types
 * @author Cory Steudeman
 * @version 0.1
 */
@Repository
public interface TypeRepository extends JpaRepository<Type, Integer> {
}
