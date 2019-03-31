package ado.edu.pucmm.rancheraservices.controller;

import ado.edu.pucmm.rancheraservices.controller.base.BaseController;
import ado.edu.pucmm.rancheraservices.domain.Route;
import ado.edu.pucmm.rancheraservices.repository.RouteRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RouteController extends BaseController {

    private static  final Logger logger = Logger.getLogger(RouteController.class);

    @Autowired
    private RouteRepository routeRepository;

    @RequestMapping(value = "/protected/routes", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Route>> get(){
        return new ResponseEntity<>(routeRepository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/protected/routes/{user}", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Route>> getById(@PathVariable int user){
        return new ResponseEntity<>(routeRepository.findRoutesByUser(user), HttpStatus.OK);
    }

    @RequestMapping(value = "/protected/routes", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody Route route){
        Route savedRoute = null;
        try{
            route.setStops(route.getStops());
            savedRoute = routeRepository.save(route);
            logger.info("Route created:"+ savedRoute.getId());
            return new ResponseEntity<>(savedRoute, HttpStatus.OK);
        }catch (Exception e){
            logger.error("Exception create", e);
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
