package ado.edu.pucmm.rancheraservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RancheraServicesApplication {

	@Autowired
	public static void main(String[] args) {
		SpringApplication.run(RancheraServicesApplication.class, args);
	}
}
