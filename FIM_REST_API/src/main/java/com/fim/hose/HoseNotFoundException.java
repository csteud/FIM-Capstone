package com.fim.hose;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * <code> HoseNotFoundException </code> is the exception thrown when a hose isn't found
 * @author Cory Steudeman
 * @version 0.1
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class HoseNotFoundException extends RuntimeException {

    public HoseNotFoundException(String message) {
        super(message);
    }
}
