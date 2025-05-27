package com.example.Backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		// System.setProperty("spring.main.lazy-initialization", "true"); //speeds up
		// debugging
		SpringApplication.run(BackendApplication.class, args);
	}

}
