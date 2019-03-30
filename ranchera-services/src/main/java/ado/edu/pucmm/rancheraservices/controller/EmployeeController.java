package ado.edu.pucmm.rancheraservices.controller;

import ado.edu.pucmm.rancheraservices.controller.base.BaseController;
import com.intuit.ipp.data.Employee;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController extends BaseController {

    private static final Logger logger = Logger.getLogger(InvoiceController.class);

    @RequestMapping(value = "/protected/employees", method = RequestMethod.GET)
    public ResponseEntity<List<Employee>> get(){
        String query = "Select * From Employee";
        return new ResponseEntity<>((List<Employee>)getQbHelper().executeSQL(query), HttpStatus.OK);
    }
}
