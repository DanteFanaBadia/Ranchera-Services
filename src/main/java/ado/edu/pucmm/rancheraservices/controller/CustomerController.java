package ado.edu.pucmm.rancheraservices.controller;

import ado.edu.pucmm.rancheraservices.controller.base.BaseController;
import com.intuit.ipp.data.Customer;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController extends BaseController {

    private static final Logger logger = Logger.getLogger(CustomerController.class);

    @RequestMapping(value = "/protected/customers", method = RequestMethod.GET)
    public ResponseEntity<List<Customer>> get(){
        return new ResponseEntity<>((List<Customer>)getQbHelper().executeSQL("select * from customer"),HttpStatus.OK);
    }
}
