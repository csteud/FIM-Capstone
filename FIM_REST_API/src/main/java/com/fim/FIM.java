package com.fim;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * <code> FIM </code> is the entry to the FIM application.
 * @author Cory Steudeman
 * @version 0.1
 */
@SpringBootApplication
public class FIM {

	/**
	 * <code> main </code> is the entry to the FIM application.
	 * @param args takes in any of our command line argument.
	 */
	public static void main(String[] args) {
		SpringApplication.run(FIM.class, args);
	}
}
