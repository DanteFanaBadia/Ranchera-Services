package ado.edu.pucmm.rancheraservices;

import ado.edu.pucmm.rancheraservices.domain.Route;
import ado.edu.pucmm.rancheraservices.domain.Stop;
import ado.edu.pucmm.rancheraservices.repository.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RanchServicesApplication implements CommandLineRunner {

	@Autowired
	private RouteRepository routeRepository;

	@Autowired
	public static void main(String[] args) {
		SpringApplication.run(RanchServicesApplication.class, args);
	}


	@Override
	public void run(String... args) {}
}
