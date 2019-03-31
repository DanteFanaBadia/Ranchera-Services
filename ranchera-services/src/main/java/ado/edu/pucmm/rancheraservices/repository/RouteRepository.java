package ado.edu.pucmm.rancheraservices.repository;

import ado.edu.pucmm.rancheraservices.domain.Route;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RouteRepository extends CrudRepository<Route, Long> {
    List<Route> findRoutesByUser(int user);
}
