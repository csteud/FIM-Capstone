package com.fim;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * <code> FIM </code> is the entry to the FIM application.
 * @author Cory Steudeman
 * @version 0.1
 */
@SpringBootApplication
public class FIM extends SpringBootServletInitializer {

	/**
	 * <code> main </code> is the entry to the FIM application.
	 * @param args takes in any of our command line argument.
	 */
	public static void main(String[] args) {
		SpringApplication.run(FIM.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(FIM.class);
	}
}
