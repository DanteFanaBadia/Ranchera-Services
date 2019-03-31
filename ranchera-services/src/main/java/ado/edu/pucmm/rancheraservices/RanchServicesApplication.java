package ado.edu.pucmm.rancheraservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RanchServicesApplication implements CommandLineRunner {

	@Autowired
	public static void main(String[] args) {
		SpringApplication.run(RanchServicesApplication.class, args);
	}


	@Override
	public void run(String... args) {}
}
